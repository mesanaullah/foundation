// import React, { useState } from 'react'
// import Title from '../components/Title';

// const Apply = () => {

//     const [formData, setFormData] = useState({
//         name: "",
//         age: "",
//         gender: "",
//         mobile: "",
//         address: "",
//         skill: "",
//         tools: "",
//         training: "",
//         idProof: null,
//     });

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData({
//             ...formData,
//             [name]: files ? files[0] : value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Form submitted successfully!");

//         // Reset form
//         setFormData({
//             name: "",
//             age: "",
//             gender: "",
//             mobile: "",
//             address: "",
//             skill: "",
//             tools: "",
//             training: "",
//             idProof: null,
//         });

//         // Reset file input manually
//         document.getElementById("idProofInput").value = "";
//     };



//     return (
//         <div >
//             <div div className='text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400' >
//                 <Title text1={'Apply '} text2={'Now'} />
//             </div >

//             <p className="text-center text-gray-700 text-lg font-medium">
//                 Fill this form to receive tools, training, raw materials, and
//                 guaranteed earning support.
//             </p>

//             <div className='flex justify-center'>
//                 <form
//                     onSubmit={handleSubmit}
//                     className="mt-8 w-full sm:w-[80vw] items-center bg-white shadow-sm rounded-md p-6 sm:p-8 space-y-5"
//                 >
//                     {/* Full Name */}
//                     <div>
//                         <label className="font-semibold">Full Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             placeholder="Enter your full name"
//                         />
//                     </div>

//                     {/* Age */}
//                     <div>
//                         <label className="font-semibold">Age</label>
//                         <input
//                             type="number"
//                             name="age"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             placeholder="Enter your age"
//                         />
//                     </div>

//                     {/* Gender */}
//                     <div>
//                         <label className="font-semibold">Gender</label>
//                         <select
//                             name="gender"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                         >
//                             <option value="">Select Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>

//                     {/* Mobile */}
//                     <div>
//                         <label className="font-semibold">Mobile</label>
//                         <input
//                             type="tel"
//                             name="mobile"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             placeholder="Enter your mobile number"
//                         />
//                     </div>

//                     {/* Address */}
//                     <div>
//                         <label className="font-semibold">Address</label>
//                         <textarea
//                             name="address"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             placeholder="Enter your full address"
//                             rows="3"
//                         ></textarea>
//                     </div>

//                     {/* Skill */}
//                     <div>
//                         <label className="font-semibold">What skill do you have?</label>
//                         <textarea
//                             name="skill"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             placeholder="Describe your skill (e.g., tailoring, woodwork)"
//                             rows="2"
//                         ></textarea>
//                     </div>

//                     {/* Tools Needed */}
//                     <div>
//                         <label className="font-semibold">What tools do you need?</label>
//                         <textarea
//                             name="tools"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                             placeholder="List the tools you need"
//                             rows="2"
//                         ></textarea>
//                     </div>

//                     {/* Training Required */}
//                     <div>
//                         <label className="font-semibold">Do you need training?</label>
//                         <select
//                             name="training"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                         >
//                             <option value="">Select Option</option>
//                             <option value="Yes">Yes</option>
//                             <option value="No">No</option>
//                         </select>
//                     </div>

//                     {/* ID Proof Upload */}
//                     <div>
//                         <label className="font-semibold">Upload ID Proof</label>
//                         <input
//                             type="file"
//                             name="idProof"
//                             id="idProofInput"
//                             required
//                             onChange={handleChange}
//                             className="w-full mt-2"
//                             accept="image/*,application/pdf"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all"
//                     >
//                         Submit Application
//                     </button>
//                 </form>
//             </div>
//         </div >
//     )
// }

// export default Apply

import React, { useState } from 'react'
import Title from '../components/Title';

const Apply = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        mobile: "",
        address: "",
        skill: "",
        tools: "",
        training: "",
        idProof: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");

        // Reset form
        setFormData({
            name: "",
            age: "",
            gender: "",
            mobile: "",
            address: "",
            skill: "",
            tools: "",
            training: "",
            idProof: null,
        });

        // Reset file input manually
        document.getElementById("idProofInput").value = "";
    };

    return (
        <div>
            <div className='text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400'>
                <Title text1={'Apply '} text2={'Now'} />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium">
                Fill this form to receive tools, training, raw materials, and
                guaranteed earning support.
            </p>

            <div className='flex justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 w-full sm:w-[80vw] items-center bg-white shadow-sm rounded-md p-6 sm:p-8 space-y-5"
                >
                    {/* Full Name */}
                    <div>
                        <label className="font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="font-semibold">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your age"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="font-semibold">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="font-semibold">Mobile</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="font-semibold">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your full address"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Skill */}
                    <div>
                        <label className="font-semibold">What skill do you have?</label>
                        <textarea
                            name="skill"
                            value={formData.skill}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Describe your skill (e.g., tailoring, woodwork)"
                            rows="2"
                        ></textarea>
                    </div>

                    {/* Tools */}
                    <div>
                        <label className="font-semibold">What tools do you need?</label>
                        <textarea
                            name="tools"
                            value={formData.tools}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="List the tools you need"
                            rows="2"
                        ></textarea>
                    </div>

                    {/* Training */}
                    <div>
                        <label className="font-semibold">Do you need training?</label>
                        <select
                            name="training"
                            value={formData.training}
                            required
                            onChange={handleChange}
                            className="w-full mt-1 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="">Select Option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* ID Proof */}
                    <div>
                        <label className="font-semibold">Upload ID Proof</label>
                        <input
                            type="file"
                            name="idProof"
                            id="idProofInput"
                            required
                            onChange={handleChange}
                            className="w-full mt-2"
                            accept="image/*,application/pdf"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Apply;
