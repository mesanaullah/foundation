import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Admin login
export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ message: "Invalid username" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ success: true, token });
};
