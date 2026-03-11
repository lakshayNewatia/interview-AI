const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: [
        "https://interview-ai-git-main-lakshaynewatias-projects.vercel.app",
        "https://interview-ai-nine-eta.vercel.app/" // Add your main domain too
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
};

// Apply CORS to ALL requests (including OPTIONS) as early as possible
app.use(cors(corsOptions)); 

app.use(express.json());
app.use(cookieParser());

/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;

