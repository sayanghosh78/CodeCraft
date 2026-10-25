import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      immutable: true,
    },

    password: {
      type: String,
      required: function () {
        return this.authProvider === "local";
      },
      select: false,
    },

    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local"
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true // allows many users without a googleId
    },

    avatar: {
      type: String
    },

    role: {
      type: String,
      enum: ["student", "instructor"],
      default: "student",
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    otpHash: {
      type: String,
      select: false,
    },

    otpExpiresAt: {
      type: Date,
      select: false,
    },

    otpAttempts: {
      type: Number,
      default: 0,
      select: false,
    },

    otpLastSentAt: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;