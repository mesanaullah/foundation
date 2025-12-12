import express from "express";
import upload from "../middleware/upload.js";
import { submitApplication, getAllApplications } from "../controllers/applyController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/apply", upload.fields([
  { name: "photo", maxCount: 1 }
]), submitApplication);

// protected
router.get("/applications", protect, getAllApplications);

export default router;
