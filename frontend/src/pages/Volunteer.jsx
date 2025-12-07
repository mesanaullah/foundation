import React from "react";
import Title from "../components/Title";
import { FaChalkboardTeacher, FaCamera, FaHandsHelping, FaUsers, FaBullhorn, FaTools } from "react-icons/fa";

const Volunteer = () => {
    const roles = [
        {
            id: 1,
            title: "Skill Trainer",
            icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
            description: "Share your knowledge and help beneficiaries improve their skills.",
        },
        {
            id: 2,
            title: "Field Coordinator",
            icon: <FaUsers className="text-4xl text-yellow-500" />,
            description: "Work directly in communities and assist in field operations.",
        },
        {
            id: 3,
            title: "Social Media Support",
            icon: <FaBullhorn className="text-4xl text-yellow-500" />,
            description: "Help spread awareness through content and online engagement.",
        },
        {
            id: 4,
            title: "Fundraising Volunteer",
            icon: <FaHandsHelping className="text-4xl text-yellow-500" />,
            description: "Assist in raising financial support for beneficiaries and programs.",
        },
        {
            id: 5,
            title: "Workshop Assistant",
            icon: <FaTools className="text-4xl text-yellow-500" />,
            description: "Support hands-on training workshops for beneficiaries.",
        },
        {
            id: 6,
            title: "Product Photography Volunteer",
            icon: <FaCamera className="text-4xl text-yellow-500" />,
            description: "Capture beautiful photos of products made by our beneficiaries.",
        },
    ];

    return (
        <div className="pb-20">
            {/* Heading */}
            <div className="text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400">
                <Title text1="Join Us as a " text2="Volunteer" />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium max-w-2xl mx-auto px-4">
                Contribute your time, skills, and passion to empower thousands of skilled individuals across India.
            </p>

            {/* Volunteer Roles */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12">
                {roles.map((role) => (
                    <div
                        key={role.id}
                        className="bg-white shadow-md border border-yellow-400 rounded-xl p-6 text-center hover:shadow-lg transition-all"
                    >
                        <div className="flex justify-center mb-4">{role.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{role.title}</h3>
                        <p className="text-gray-600 mt-2">{role.description}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-14">
                <a
                    href="/apply"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 font-semibold rounded-lg transition-all"
                >
                    Become a Volunteer
                </a>
            </div>
        </div>
    );
};

export default Volunteer;

