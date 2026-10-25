import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"CodeCraft" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your email address",
    text: `Your verification OTP is ${otp}. It expires in 5 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px;">
        <h2>Email Verification</h2>
        <p>Use the following OTP to verify your email:</p>
        <h1 style="letter-spacing: 8px;">${otp}</h1>
        <p>This code expires in 5 minutes.</p>
        <p>If you did not request this, ignore this email.</p>
      </div>
    `,
  });
};