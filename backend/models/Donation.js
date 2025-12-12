import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  method: String,
  details: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Donation", donationSchema);
