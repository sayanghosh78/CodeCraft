// validators/authValidator.js
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .email("Enter a valid email address")
  .transform((val) => val.toLowerCase());

export const sendVerificationCodeSchema = z.object({
  email: emailSchema,
}).strict();

export const signupSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters").max(80),
  email: emailSchema,
  password: z.string().min(6, "Password must contain at least 6 characters").max(72),
  role: z.enum(["student", "instructor"]).default("student"),
}).strict();

export const verifyEmailSchema = z.object({
  email: emailSchema,
  otp: z.string().regex(/^\d{6}$/, "OTP must contain 6 digits"),
}).strict();

export const resendOtpSchema = z.object({
  email: emailSchema,
}).strict();

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required").max(72),
}).strict();


export const googleLoginSchema = z.object({
  code: z.string().min(1, "Google authorization code is required"),
  role: z.enum(["student", "instructor"]).optional(),
}).strict();