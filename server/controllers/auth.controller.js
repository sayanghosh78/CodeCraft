import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { timingSafeEqual } from "node:crypto";
import { OAuth2Client } from "google-auth-library";

import User from "../models/User.js";
import OtpVerification from "../models/OtpVerification.js"; // <-- 1. IMPORT TEMP OTP MODEL
import { generateOtp, hashOtp } from "../utils/otp.js";
import { sendOtpEmail } from "../utils/email.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const createToken = (user) =>
  jwt.sign(
    { sub: user._id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

const sendAuthCookie = (res, user) => {
  res.cookie("token", createToken(user), cookieOptions);
};

const publicUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  isEmailVerified: user.isEmailVerified,
});

// ==========================================
// 1. NEW: SEND VERIFICATION CODE (Called when clicking "Verify")
// ==========================================
export const sendVerificationCode = async (req, res) => {
  const { email } = req.validatedBody;

  try {
    // Check if an account already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    const otp = generateOtp();
    const otpHash = hashOtp(otp);

    // Save or refresh OTP in the temp verification collection
    await OtpVerification.findOneAndUpdate(
      { email },
      { otpHash, verified: false, createdAt: new Date() },
      { upsert: true, new: true }
    );

    await sendOtpEmail(email, otp);

    return res.status(200).json({
      success: true,
      message: "Verification code sent to your email",
    });
  } catch (error) {
    console.error("Send verification code error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to send verification code",
    });
  }
};

// ==========================================
// 2. MODIFIED: VERIFY EMAIL (Verifies temp OTP)
// ==========================================
export const verifyEmail = async (req, res) => {
  const { email, otp } = req.validatedBody;

  try {
    const record = await OtpVerification.findOne({ email });

    if (!record) {
      return res.status(400).json({
        success: false,
        message: "OTP expired or not requested. Please request a new code.",
      });
    }

    const expected = Buffer.from(record.otpHash, "hex");
    const actual = Buffer.from(hashOtp(otp), "hex");

    const valid =
      expected.length === actual.length &&
      timingSafeEqual(expected, actual);

    if (!valid) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Mark as verified so the signup step knows this email is valid
    record.verified = true;
    await record.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully! You can now set your password.",
    });
  } catch (error) {
    console.error("Email verification error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to verify email",
    });
  }
};

// ==========================================
// 3. MODIFIED: SIGNUP (Runs AFTER email is verified)
// ==========================================
export const signup = async (req, res) => {
  const { name, email, password, role } = req.validatedBody;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // Security check: ensure email was verified first
    const record = await OtpVerification.findOne({ email });
    if (!record || !record.verified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first before creating an account.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: passwordHash,
      role: role || "student",
      isEmailVerified: true,
    });

    // Delete the temporary record after user creation
    await OtpVerification.deleteOne({ email });

    return res.status(201).json({
      success: true,
      message: "Account created successfully. You can now log in.",
      data: { user: publicUser(user) },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    console.error("Signup error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create account",
    });
  }
};

// RESEND OTP
export const resendOtp = async (req, res) => {
  const { email } = req.validatedBody;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    const otp = generateOtp();
    const otpHash = hashOtp(otp);

    await OtpVerification.findOneAndUpdate(
      { email },
      { otpHash, verified: false, createdAt: new Date() },
      { upsert: true, returnDocument: 'after' }
    );

    try {
      await sendOtpEmail(email, otp);
    } catch (error) {
      console.error("Resend OTP email failed:", error.message);
      return res.status(503).json({
        success: false,
        message: "Unable to send OTP. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "A new OTP has been sent to your email.",
    });
  } catch (error) {
    console.error("Resend OTP error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process OTP request",
    });
  }
};

// Google Login
export const googleLogin = async (req, res) => {
  const {code, role} = req.validatedBody

  try {

    const googleClient = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: "postmessage",
    });

    const { tokens } = await googleClient.getToken({
      code,
      redirect_uri: "postmessage",
    });

    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload()

    if(!payload?.email || !payload.email_verified){
      return res.status(401).json({
        success: false,
        message: "Google account email is not verified",
      })
    }

    const email = payload.email.toLowerCase()

    let user = await User.findOne({
      $or: [{ googleId: payload.sub }, { email }]
    })

    if(!user){
      user = await User.create({
        name: payload.name || email.split("@")[0],email,
        googleId: payload.sub,
        authProvider: "google",
        avatar: payload.picture,
        isEmailVerified: true,
        role: role || "student"
      })
    } else if(!user.googleId){
      user.googleId = payload.sub;
      user.isEmailVerified = true;
      if (!user.avatar) user.avatar = payload.picture;
      await user.save()

    }

    sendAuthCookie(res,user)

    return res.status(200).json({
      success: true,
      message: "Google login successful",
      data: { user: publicUser(user) },
    })

  } catch (error) {
    console.error("Google login error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Google authentication failed",
    });
  }
}

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.validatedBody;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if(!user.password) {
      return res.status(401).json({
        success: false,
        message: "This account uses Google sign-in",
      })
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (!user.isEmailVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in",
      });
    }

    sendAuthCookie(res, user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: { user: publicUser(user) },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to log in",
    });
  }
};

// LOGOUT
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};

// CURRENT USER
export const getMe = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: { user: publicUser(req.user) },
  });
};