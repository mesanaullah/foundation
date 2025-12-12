import Admin from "../models/AdminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerAdminIfNotExists = async () => {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if (!email || !password) return;
    const exists = await Admin.findOne({ email });
    if (exists) return;
    const hash = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hash, name: "Admin" });
    console.log("Seeded admin:", email);
};

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(401).json({ message: "Invalid credentials" });
        const ok = await bcrypt.compare(password, admin.password);
        if (!ok) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ token, admin: { email: admin.email, name: admin.name } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
