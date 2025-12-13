import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import applyRoutes from "./routes/applyRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
// import donationRoutes from "./routes/donationRoutes.js";
import { registerAdminIfNotExists } from "./controllers/adminController.js";
import fs from "fs";

dotenv.config();
connectDB();

// ensure uploads temp folder (multer uses memory so not required, but safe)
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

const app = express();
app.use(helmet());
app.use(cors({
    // origin: ["http://localhost:5174", "http://localhost:5173"],
    origin: [
        "http://localhost:5174",
        "http://localhost:5173"
        // "https://ummeed-admin.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rateLimit({ windowMs: 60 * 1000, max: 200 }));

// Status
app.get("/", (req, res) => {
    res.json({
        status: "Backend is running",
        env: process.env.NODE_ENV || "development"
    });
});


app.use("/api", applyRoutes);
app.use("/api/admin", adminRoutes);
// app.use("/api", donationRoutes);

// seed admin from env if not exists
registerAdminIfNotExists().catch(console.error);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
