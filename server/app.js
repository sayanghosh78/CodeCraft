import dotenv from "dotenv";
dotenv.config(); // Must be at the very top!

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./config/db.js";

const app = express();

// Explicit CORS setup
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", "https://coderrcraft.netlify.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

console.log("client id:", !!process.env.GOOGLE_CLIENT_ID, "secret:", !!process.env.GOOGLE_CLIENT_SECRET);
startServer();