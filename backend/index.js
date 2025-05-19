import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import NoteRoute from "./route/RouteNote.js";
import UserRoute from "./route/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Konfigurasi CORS
const allowedOrigins = [
  "https://notes-frontend-haqqi-dot-f-01-450707.uc.r.appspot.com/",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());

// ✅ Routing langsung di root
app.use(NoteRoute);
app.use(UserRoute);

// ✅ Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// ✅ Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`)
);
