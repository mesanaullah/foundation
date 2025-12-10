import React, { useEffect, useState } from "react";

const Admin = () => {
    const [dashboardData, setDashboardData] = useState({
        totalUsers: 0,
        totalDonations: 0,
        donations: [],
        appliedUsers: [],
        completedApplications: [],
        halfCompletedApplications: [],
        halfCompletedPayments: []
    });

    useEffect(() => {
        // 🔥 Replace this with your backend API call

        const sampleData = {
            totalUsers: 120,
            totalDonations: 78500,
            donations: [
                { id: 1, name: "Amit Sharma", amount: 1500, method: "UPI", date: "2024-02-10" },
                { id: 2, name: "Ritu Singh", amount: 5000, method: "Bank Transfer", date: "2024-02-14" },
            ],

            // ⭐ ALL APPLIED USERS (MIRRORS YOUR APPLY FORM)
            appliedUsers: [
                {
                    id: 1,
                    name: "Ramesh Kumar",
                    age: 28,
                    gender: "Male",
                    mobile: "9876543210",
                    address: "Delhi, India",
                    skill: "Carpentry",
                    tools: "Hammer, Saw, Drill",
                    training: "Yes",
                    idProof: "ramesh_id.pdf"
                },
                {
                    id: 2,
                    name: "Meera Devi",
                    age: 32,
                    gender: "Female",
                    mobile: "9123456780",
                    address: "Jaipur, Rajasthan",
                    skill: "Pickle Making",
                    tools: "Jars, Packaging",
                    training: "No",
                    idProof: "meera_id.jpg"
                }
            ],

            completedApplications: [
                { id: 1, name: "Ramesh", skill: "Carpentry" }
            ],
            halfCompletedApplications: [
                { id: 3, name: "Suresh", step: "Uploaded ID but not submitted" }
            ],
            halfCompletedPayments: [
                { id: 4, name: "Kavita", reason: "Payment Failed" }
            ]
        };

        setDashboardData(sampleData);
    }, []);

    return (
        <div className="py-4 sm:py-6 bg-gray-50 min-h-screen">

            {/* DASHBOARD HEADER */}
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Overview of all applications and donations.</p>

            {/* TOP STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500">
                    <h2 className="text-lg font-semibold">Total Registered Users</h2>
                    <p className="text-3xl font-bold mt-2">
                        {dashboardData.totalUsers}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
                    <h2 className="text-lg font-semibold">Total Donations</h2>
                    <p className="text-3xl font-bold mt-2">
                        ₹ {dashboardData.totalDonations.toLocaleString()}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-red-500">
                    <h2 className="text-lg font-semibold">Half Completed Applications</h2>
                    <p className="text-3xl font-bold mt-2">
                        {dashboardData.halfCompletedApplications.length}
                    </p>
                </div>

            </div>

            {/* ⭐ ALL APPLIED USERS TABLE */}
            <div className="mt-12 bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">All Applied Users</h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-gray-100 border-b text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Age</th>
                                <th className="p-3">Gender</th>
                                <th className="p-3">Mobile</th>
                                <th className="p-3">Address</th>
                                <th className="p-3">Skill</th>
                                <th className="p-3">Tools Needed</th>
                                <th className="p-3">Training</th>
                                <th className="p-3">ID Proof</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dashboardData.appliedUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="9" className="p-4 text-center text-gray-500">
                                        No applications received yet.
                                    </td>
                                </tr>
                            ) : (
                                dashboardData.appliedUsers.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3 font-semibold">{user.name}</td>
                                        <td className="p-3">{user.age}</td>
                                        <td className="p-3">{user.gender}</td>
                                        <td className="p-3">{user.mobile}</td>
                                        <td className="p-3">{user.address}</td>
                                        <td className="p-3">{user.skill}</td>
                                        <td className="p-3">{user.tools}</td>
                                        <td className="p-3">{user.training}</td>
                                        <td className="p-3 underline text-blue-500 cursor-pointer">
                                            {user.idProof}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* DONATION DETAILS */}
            <div className="mt-12 bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Donation Details</h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 border-b text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Method</th>
                                <th className="p-3">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dashboardData.donations.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center text-gray-500">
                                        No donations yet.
                                    </td>
                                </tr>
                            ) : (
                                dashboardData.donations.map((d) => (
                                    <tr key={d.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{d.name}</td>
                                        <td className="p-3 font-semibold">₹ {d.amount}</td>
                                        <td className="p-3">{d.method}</td>
                                        <td className="p-3">{d.date}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* COMPLETED APPLICATIONS */}
            <div className="mt-12 bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Completed Applications</h2>

                {dashboardData.completedApplications.length === 0 ? (
                    <p className="text-gray-500">No completed applications.</p>
                ) : (
                    <ul className="space-y-2">
                        {dashboardData.completedApplications.map((user) => (
                            <li key={user.id} className="p-3 border rounded-lg shadow-sm">
                                <strong>{user.name}</strong> — {user.skill}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* HALF COMPLETED APPLICATIONS */}
            <div className="mt-12 bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Half Completed Applications</h2>

                {dashboardData.halfCompletedApplications.length === 0 ? (
                    <p className="text-gray-500">None found.</p>
                ) : (
                    <ul className="space-y-2">
                        {dashboardData.halfCompletedApplications.map((u) => (
                            <li key={u.id} className="p-3 border rounded-lg shadow-sm">
                                <strong>{u.name}</strong> — {u.step}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* HALF COMPLETED PAYMENTS */}
            <div className="mt-12 bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-xl font-semibold mb-4">Half Completed Payments</h2>

                {dashboardData.halfCompletedPayments.length === 0 ? (
                    <p className="text-gray-500">No pending payments.</p>
                ) : (
                    <ul className="space-y-2">
                        {dashboardData.halfCompletedPayments.map((u) => (
                            <li key={u.id} className="p-3 border rounded-lg shadow-sm">
                                <strong>{u.name}</strong> — {u.reason}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default Admin;
