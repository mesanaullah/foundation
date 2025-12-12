import Application from "../models/ApplyModel.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadStream = (buffer, folder = "umeed") =>
    new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
                if (result) resolve(result);
                else reject(error);
            }
        );
        streamifier.createReadStream(buffer).pipe(stream);
    });

export const submitApplication = async (req, res) => {
    try {
        // fields
        const {
            firstName, lastName, dob, gender, mobile, email,
            qualification, address, state
        } = req.body;

        let photoUrl = null;

        if (req.files && req.files.photo && req.files.photo[0]) {
            const photo = req.files.photo[0];
            const uploaded = await uploadStream(photo.buffer, "umeed/photos");
            photoUrl = uploaded.secure_url;
        }

        // if (req.files && req.files.idProof && req.files.idProof[0]) {
        //   const proof = req.files.idProof[0];
        //   const uploaded = await uploadStream(proof.buffer, "umeed/idProofs");
        //   idProofUrl = uploaded.secure_url;
        // }

        const newApp = new Application({
            firstName, lastName, dob, gender, mobile, email, qualification,
            address, state, photoUrl
        });

        await newApp.save();
        res.status(201).json({ success: true, data: newApp });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getAllApplications = async (req, res) => {
    try {
        const apps = await Application.find().sort({ createdAt: -1 });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
