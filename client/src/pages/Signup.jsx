import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signupUser,
  verifyEmail,
  sendVerificationCode,
} from "../services/auth.service";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailVerifyCode: "",
    password: "",
    confirmPassword: "",
  });

  const [codeSent, setCodeSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset verification if user modifies their email
    if (name === "email") {
      setEmailVerified(false);
      setCodeSent(false);
      setFormData((prev) => ({
        ...prev,
        email: value,
        emailVerifyCode: "",
      }));
    }

    setError("");
    setSuccess("");
  };

  // Step 1: Send OTP to user's email
  const handleVerifyEmail = async () => {
    setError("");
    setSuccess("");

    if (!formData.email.trim()) {
      setError("Please enter your email first.");
      return;
    }

    setVerifying(true);

    try {
      const data = await sendVerificationCode({
        email: formData.email.trim(),
      });

      setCodeSent(true);
      setSuccess(data.message || "Verification code sent to your email.");
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to send verification code."
      );
    } finally {
      setVerifying(false);
    }
  };

  // Step 2: Confirm OTP
  const handleConfirmEmail = async () => {
    setError("");
    setSuccess("");

    if (!formData.emailVerifyCode.trim()) {
      setError("Please enter the verification code.");
      return;
    }

    setVerifying(true);

    try {
      const data = await verifyEmail({
        email: formData.email.trim(),
        otp: formData.emailVerifyCode.trim(),
      });

      setEmailVerified(true);
      setSuccess(data.message || "Email verified! Now set your password.");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid or expired verification code."
      );
    } finally {
      setVerifying(false);
    }
  };

  // Step 3: Complete Account Registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!emailVerified) {
      setError("Please verify your email first.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const data = await signupUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      setSuccess(data.message || "Account created successfully.");
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen w-full flex items-center justify-center
        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,#110F1D_0%,#0D0B0E_45%,#0A0907_100%)]
        bg-[size:80px_80px,80px_80px,100%_100%]
        px-5 py-10
      "
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        
        {/* Signup form */}
        <div className="w-full max-w-md border border-[#3a3a3c]/80 rounded-3xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-semibold text-white">
                Create your account
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Join CodeCraft and start building.
              </p>
            </div>

            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-200">
                Enter Your Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent text-white border border-[#3a3a3c]/80 rounded-2xl px-5 py-3 outline-none focus:border-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-200">
                Enter Your Email
              </label>

              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="user@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  readOnly={emailVerified}
                  className="min-w-0 flex-1 bg-transparent text-white border border-[#3a3a3c]/80 rounded-2xl px-4 py-3 outline-none focus:border-gray-400 read-only:opacity-70"
                />

                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={verifying || emailVerified}
                  className="border border-[#3a3a3c]/80 rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-white/10 disabled:opacity-50"
                >
                  {emailVerified
                    ? "Verified"
                    : verifying
                    ? "Sending..."
                    : codeSent
                    ? "Resend"
                    : "Verify"}
                </button>
              </div>
            </div>

            {/* OTP Input Section (Visible once code is sent and before email is verified) */}
            {codeSent && !emailVerified && (
              <div className="flex flex-col gap-3">
                <label htmlFor="emailVerifyCode" className="text-gray-200">
                  Verification Code
                </label>

                <input
                  id="emailVerifyCode"
                  type="text"
                  name="emailVerifyCode"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="Enter 6-digit OTP"
                  value={formData.emailVerifyCode}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-white border border-[#3a3a3c]/80 rounded-2xl px-5 py-3 outline-none focus:border-gray-400"
                />

                <button
                  type="button"
                  onClick={handleConfirmEmail}
                  disabled={verifying}
                  className="border border-white/20 rounded-xl px-4 py-3 text-white hover:bg-white/10 disabled:opacity-50"
                >
                  {verifying ? "Verifying..." : "Confirm Email"}
                </button>
              </div>
            )}

            {/* Password Section (Revealed only after email is verified) */}
            {emailVerified && (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-gray-200">
                    Enter Your Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-white border border-[#3a3a3c]/80 rounded-2xl px-5 py-3 outline-none focus:border-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword" className="text-gray-200">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-white border border-[#3a3a3c]/80 rounded-2xl px-5 py-3 outline-none focus:border-gray-400"
                  />
                </div>
              </>
            )}

            {error && (
              <p role="alert" className="text-sm text-red-400">
                {error}
              </p>
            )}

            {success && (
              <p role="status" className="text-sm text-green-400">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !emailVerified}
              className="w-full rounded-2xl px-6 py-4 bg-white text-black font-bold text-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create an Account"}
            </button>
          </form>
        </div>

        {/* Social login */}
        <div className="w-full max-w-md flex flex-col items-center gap-5">
          <button
            type="button"
            className="w-full px-5 py-4 text-black font-semibold rounded-2xl bg-white flex items-center justify-center gap-3"
          >
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            className="w-full px-5 py-4 text-black font-semibold rounded-2xl bg-white flex items-center justify-center gap-3"
          >
            <span>Continue with Apple</span>
          </button>

          <Link to="/auth/login" className="text-gray-300 hover:text-white">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;