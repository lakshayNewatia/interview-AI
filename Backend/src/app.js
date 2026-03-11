const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: [
    "https://interview-ai-git-main-lakshaynewatias-projects.vercel.app",
    "https://interview-ai-nine-eta.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
};

// Apply CORS globally
app.use(cors(corsOptions)); // ✅ handles preflight automatically

app.use(express.json());
app.use(cookieParser());

/* Routes */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
