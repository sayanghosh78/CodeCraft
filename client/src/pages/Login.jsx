import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, googleLoginUser } from "../services/auth.service";

import { AtSign, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [activeForm, setActiveForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const email = formData.email.trim();
    const password = formData.password;

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const data = await loginUser({
        email,
        password,
      });

      setSuccess(data.message || "Login successful.");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      setError("");
      setSuccess("");
      setLoading(true);

      try {
        const data = await googleLoginUser(code);
        setSuccess(data.message || "Google login successful.");
        setTimeout(() => navigate("/"), 1000);
      } catch (err) {
        setError(err.response?.data?.message || "Google login failed.");
      } finally {
        setLoading(false);
      }
    },
    onError: () => setError("Google sign-in failed. Please try again."),
  });

  return (
    <main
      className="
        min-h-screen w-full
        flex items-center justify-center
        px-5 py-10
        bg-[#0b0f17] 
      "
    >
      <div
        aria-labelledby="login-heading"
        className="
          w-full max-w-md
          border border-[#3a3a3c]/80
          rounded-3xl
          p-6 sm:p-8
        "
      >
        {/* Card Header  */}
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1.5">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-400">
            Enter your credentials to access your dashboard
          </p>
        </div>

        {/* Developer OAuth Buttons  */}
        <div className="space-y-2.5 mb-6">
          {/* Github Login */}
          <button
            type="button"
            className="w-full min-h-[50px] flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-[#111722] hover:bg-[#161f30] text-sm font-medium text-slate-200 hover:text-white transition-all border border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-700"
          >
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>Continue with GitHub</span>
          </button>

          {/* Google Login */}
          <button
            type="button"
            onClick={() => googleLogin()}
            disabled={loading}
            className="w-full min-h-[50px] flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-[#111722] hover:bg-[#161f30] text-sm font-medium text-slate-200 hover:text-white transition-all border border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-700"
          >
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>

            <span>Continue with Google</span>
          </button>

          {/* Email Login */}
          {!activeForm && (
            <button
              type="button"
              onClick={() => setActiveForm(true)}
              className="w-full min-h-[50px] flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-[#111722] hover:bg-[#161f30] text-sm font-medium text-slate-200 hover:text-white transition-all border border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-700"
            >
              <svg
                className="h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="4.5"
                  width="20"
                  height="15"
                  rx="2"
                  stroke="#EA4335"
                  strokeWidth="2"
                />
                <path
                  d="M3 6L12 13L21 6"
                  stroke="#EA4335"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Continue with Email</span>
            </button>
          )}
        </div>

        {/* Credentials Form */}
        <div>
          {activeForm && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-5">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Email
                </label>

                <div className="relative">
                  <div className="absolute inset-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <span>
                      <AtSign width={18} height={18} />
                    </span>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@email.com"
                    autoComplete="email"
                    disabled={loading}
                    className="
                      w-full bg-transparent text-slate-100 placeholder-slate-500
                      border border-slate-800 text-sm
                      rounded-2xl pl-10 pr-3.5 py-3
                      focus:border-emerald-500/80 focus:ring focus:ring-emerald-500/20
                      disabled:opacity-50 transition-all outline-none
                    "
                  />
                </div>
              </div>

              {/* Password Input*/}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <Link className="text-sm text-[#34d399] font-medium hover:text-emerald-300 transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <span>
                      <LockKeyhole width={18} height={18} />
                    </span>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                    disabled={loading}
                    className="
                      w-full bg-transparent text-slate-100 placeholder-slate-500
                      border border-slate-800 text-sm
                      rounded-2xl pl-10 pr-3.5 py-3
                      focus:border-emerald-500/80 focus:ring focus:ring-emerald-500/20
                      disabled:opacity-50 transition-all outline-none
                    "
                  />

                  {/* Toggle Password Visibility Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff width={18} height={18} />
                    ) : (
                      <Eye width={18} height={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
              w-full rounded-2xl
              px-6 py-4
              bg-white text-black
              font-bold text-[16px]
              transition-opacity
              hover:opacity-90
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
              >
                {loading ? "Signing In..." : "Sign In to CodeCraft"}
              </button>
            </form>
          )}


          {/* FeedBack */}
          {error && (
            <p role="alert" className="text-center text-sm text-red-400 mb-4">
              {error}
            </p>
          )}
          {success && (
            <p
              role="status"
              className="text-center text-sm text-green-400 mb-4"
            >
              {success}
            </p>
          )}

          <div className="flex items-center justify-center">
            <Link to={"/auth/signup"} className="text-sm text-slate-400">
              Don't have an account ?{" "}
              <span className="text-cyan-500">Register here</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
