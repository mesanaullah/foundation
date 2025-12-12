import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Vite style env variable
const API = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const AdminDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [donations, setDonations] = useState({ total: 0, donations: [] });
    const [stats, setStats] = useState({ totalUsers: 0, totalDonations: 0 });

    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        if (!token) return navigate("/admin/login");

        fetchApplications();
        fetchDonations();
    }, [token]); // ✅ FIXED (prevent missing dependency warning)

    // =============================
    // Fetch Applications
    const fetchApplications = async () => {
        try {
            const res = await fetch(`${API}/api/applications`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const data = await res.json();

            if (res.ok) {
                setApplications(data);
            } else if (res.status === 401) {
                localStorage.removeItem("adminToken");
                navigate("/admin/login");
            }
        } catch (err) {
            console.error("Error fetching applications:", err);
        }
    };

    // =============================
    // Fetch Donations
    // =============================
    const fetchDonations = async () => {
        try {
            const res = await fetch(`${API}/api/donations`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const data = await res.json();

            if (res.ok) {
                setDonations(data);
                setStats(s => ({ ...s, totalDonations: data.total || 0 }));
            }
        } catch (err) {
            console.error("Error fetching donations:", err);
        }
    };

    // =============================
    // Logout
    // =============================
    const logout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
    };

    return (
        <div className="py-4 sm:py-6 bg-gray-50 ">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
                {/* <p className="text-gray-600 mt-1">Overview of all applications and donations.</p> */}
                <button
                    onClick={logout}
                    className="bg-black active:bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2  rounded-sm text-xs sm:text-sm">
                    Logout
                </button>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500">
                    <h3 className="text-lg font-semibold">Total Applications</h3>
                    <p className="text-3xl font-bold mt-2">{applications.length}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold">Total Donation Amount</h3>
                    <p className="text-3xl font-bold mt-2">
                        ₹ {stats.totalDonations.toLocaleString()}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold">Recent Donations</h3>
                    <p className="text-3xl font-bold mt-2">{donations.donations?.length || 0}</p>
                </div>
            </div>

            {/* Applications Table */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm overflow-x-auto">
                <h2 className="text-xl font-semibold p-4 mb-4">All Applied Users</h2>

                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">DOB</th>
                            <th className="p-3 text-left">Gender</th>
                            <th className="p-3 text-left">Mobile</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Qualification</th>
                            <th className="p-3 text-left">Address</th>
                            <th className="p-3 text-left">State</th>
                            <th className="p-3 text-left">Photo</th>
                            <th className="p-3 text-left">Applied At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length === 0 && (
                            <tr>
                                <td colSpan="8" className="p-4 text-center">
                                    No applications yet
                                </td>
                            </tr>
                        )}

                        {applications.map((a) => (
                            <tr key={a._id} className="border-b">
                                <td className="p-3">{a.firstName} {a.lastName}</td>
                                <td className="p-3">{a.dob}</td>
                                <td className="p-3">{a.gender}</td>
                                <td className="p-3">{a.mobile}</td>
                                <td className="p-3">{a.email}</td>
                                <td className="p-3">{a.qualification}</td>
                                <td className="p-3">{a.address}</td>
                                <td className="p-3">{a.state}</td>
                                <td className="p-3">
                                    {a.photoUrl ? (
                                        <a
                                            href={a.photoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600">
                                            View
                                        </a>
                                    ) : "—"}
                                </td>
                                <td className="p-3">
                                    {new Date(a.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Donations Table */}
            <div className="mt-8 bg-white rounded shadow overflow-x-auto p-4">
                <h3 className="text-xl font-semibold mb-4">Donations</h3>

                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Method</th>
                            <th className="p-3 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.donations?.length === 0 && (
                            <tr>
                                <td colSpan="4" className="p-4 text-center">
                                    No donations
                                </td>
                            </tr>
                        )}

                        {donations.donations?.map((d) => (
                            <tr key={d._id} className="border-b">
                                <td className="p-3">{d.name}</td>
                                <td className="p-3">₹ {d.amount}</td>
                                <td className="p-3">{d.method}</td>
                                <td className="p-3">
                                    {new Date(d.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;

