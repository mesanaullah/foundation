import React, { useState } from "react";
import Title from "../components/Title";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");

        // Reset form
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="pb-20">
            {/* Heading */}
            <div className="text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400">
                <Title text1="Contact " text2="Us" />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium max-w-2xl mx-auto px-4">
                Get in touch with Umeed India Foundation. We're here to help!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 px-6 sm:px-12">

                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>

                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-yellow-500 text-2xl" />
                        <div>
                            <p className="font-semibold">Email</p>
                            <p className="text-gray-600">info@umeedindiafoundation.in</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-yellow-500 text-2xl" />
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p className="text-gray-600">+91-9234299707</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
                        <div>
                            <p className="font-semibold">Address</p>
                            <p className="text-gray-600">(NGO address here)</p>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="mt-6">
                        <iframe
                            title="ngo location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392723023!2d77.06889972783595!3d28.527582006405474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4KS44KSX4KS14KWN4KSzIOCkleCksOCljeCkr-ClgA!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="250"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg shadow-md border"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-sm border border-yellow-400 rounded-xl p-6 sm:p-8 space-y-6"
                >
                    <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>

                    {/* Name */}
                    <div>
                        <label className="font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="font-semibold">Message</label>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact
