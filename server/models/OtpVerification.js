// models/OtpVerification.js
import mongoose from "mongoose";

const otpVerificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  otpHash: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // Document automatically deletes after 5 minutes (300 seconds)
  },
});

export default mongoose.model("OtpVerification", otpVerificationSchema);