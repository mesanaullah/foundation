import React, { useState } from 'react';
import Title from '../components/Title';

const Apply = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        mobile: "",
        email: "",
        qualification: "",
        address: "",
        state: "",
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     alert("Form submitted successfully!");

    //     setFormData({
    //         firstName: "",
    //         lastName: "",
    //         dob: "",
    //         gender: "",
    //         mobile: "",
    //         email: "",
    //         qualification: "",
    //         address: "",
    //         state: "",
    //         photo: null,
    //     });

    //     document.getElementById("photoInput").value = "";
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fd = new FormData();
            fd.append("firstName", formData.firstName);
            fd.append("lastName", formData.lastName);
            fd.append("dob", formData.dob);
            fd.append("gender", formData.gender);
            fd.append("mobile", formData.mobile);
            fd.append("email", formData.email);
            fd.append("qualification", formData.qualification);
            fd.append("address", formData.address);
            fd.append("state", formData.state);
            // fd.append("skill", formData.skill || "");
            // fd.append("tools", formData.tools || "");
            // fd.append("training", formData.training || "");
            if (formData.photo) fd.append("photo", formData.photo);
            // idProof if you have
            // if (formData.idProof) fd.append("idProof", formData.idProof);

            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/apply`, {
                method: "POST",
                body: fd
            });

            const data = await res.json();
            if (res.ok) {
                alert("Application submitted successfully!");
                // reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    dob: "",
                    gender: "",
                    mobile: "",
                    email: "",
                    qualification: "",
                    address: "",
                    state: "",
                    // skill: "",
                    // tools: "",
                    // training: "",
                    photo: null
                });
                document.getElementById("photoInput").value = "";
            } else {
                alert(data.message || "Submission failed");
            }
        } catch (err) {
            console.error(err);
            alert("Network error");
        }
    };

    return (
        <div>
            <div className='text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400'>
                <Title text1={'Apply '} text2={'Now'} />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium">
                Fill out this form to apply for office-based employment opportunities at UMEED Foundation.
            </p>

            <div className='flex justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 w-full sm:w-[80vw] bg-white shadow-sm rounded-md p-6 sm:p-8 space-y-5"
                >

                    {/* FIRST NAME + LAST NAME */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label className="font-semibold">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter first name"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="font-semibold">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter last name"
                            />
                        </div>
                    </div>

                    {/* DOB + GENDER */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label className="font-semibold">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="font-semibold">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* MOBILE + EMAIL */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label className="font-semibold">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                                placeholder="Enter mobile number"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    {/* QUALIFICATION */}
                    <div>
                        <label className="font-semibold">Qualification</label>
                        <select
                            name="qualification"
                            value={formData.qualification}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg"
                        >
                            <option value="">Select Qualification</option>
                            <option value="10th">10th</option>
                            <option value="12th">12th</option>
                            <option value="Graduation">Graduation</option>
                        </select>
                    </div>

                    {/* ADDRESS */}
                    <div>
                        <label className="font-semibold">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg"
                            placeholder="Enter your full address"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* STATE */}
                    <div>
                        <label className="font-semibold">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg"
                            placeholder="Enter your state"
                        />
                    </div>

                    {/* PHOTO */}
                    <div>
                        <label className="font-semibold">Upload Photo</label>
                        <input
                            type="file"
                            name="photo"
                            id="photoInput"
                            required
                            onChange={handleChange}
                            className="w-full mt-2"
                            accept="image/*"
                        />
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Submit Application
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Apply;
