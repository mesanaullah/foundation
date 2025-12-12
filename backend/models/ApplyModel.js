import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    gender: String,
    mobile: String,
    email: String,
    qualification: String,
    address: String,
    state: String,
    photoUrl: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Application", applicationSchema);
