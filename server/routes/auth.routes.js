import express from "express";

import {
  sendVerificationCode,
  signup,
  verifyEmail,
  resendOtp,
  googleLogin,
  login,
  logout,
  getMe,
} from "../controllers/auth.controller.js";

import {
  sendVerificationCodeSchema,
  signupSchema,
  verifyEmailSchema,
  resendOtpSchema,
  googleLoginSchema,
  loginSchema,
} from "../validators/authValidator.js";

import { validate } from "../middlewares/validate.middleware.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// 3. ADD THIS ROUTE for the verify button
router.post(
  "/send-verification-code",
  validate(sendVerificationCodeSchema),
  sendVerificationCode
);

router.post("/signup", validate(signupSchema), signup);

router.post(
  "/verify-email",
  validate(verifyEmailSchema),
  verifyEmail
);

router.post(
  "/resend-otp",
  validate(resendOtpSchema),
  resendOtp
);

router.post("/google", validate(googleLoginSchema), googleLogin)

router.post("/login", validate(loginSchema), login);

router.post("/logout", logout);

router.get("/me", protect, getMe);

export default router;