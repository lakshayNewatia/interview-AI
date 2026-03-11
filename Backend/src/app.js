const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// 1. Define specific CORS options
const corsOptions = {
    // REMOVED the trailing slash from the URL - this is a common cause of CORS failure
    origin: [
        "https://interview-ai-git-main-lakshaynewatias-projects.vercel.app",
        "https://interview-ai-nine-eta.vercel.app/" // Add your main domain too
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
};

// 2. Apply Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// 3. Explicitly handle Preflight requests (fixes the 204 error)
app.options("*", cors(corsOptions));

/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
