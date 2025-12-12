import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Admin", adminSchema);
