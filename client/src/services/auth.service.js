import api from "../api/axios";

// Register a new user
export const signupUser = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const sendVerificationCode = async (data) => {
  const response = await api.post(
    "/auth/send-verification-code",
    data
  );

  return response.data;
};

// Verify email using the OTP
export const verifyEmail = async (verificationData) => {
  const response = await api.post(
    "/auth/verify-email",
    verificationData
  );
  return response.data;
};

// Resend OTP, subject to backend verification rules
export const resendOtp = async (data) => {
  const response = await api.post("/auth/resend-otp", data);
  return response.data;
};

// Login / register with Google
export const googleLoginUser = async (code) => {
  const response = await api.post("/auth/google",{code});
  return response.data;
}

// Login an existing user
export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

// Get the currently authenticated user
export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

// Logout the current user
export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
