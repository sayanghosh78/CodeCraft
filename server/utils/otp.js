import crypto from "node:crypto";

export const generateOtp = () =>
    crypto.randomInt(100000, 1000000).toString();

export const hashOtp = (otp) =>
    crypto.createHash("sha256").update(otp).digest("hex");

export const otpExpiry = () =>
    new Date(Date.now() + 5 * 60 * 1000);