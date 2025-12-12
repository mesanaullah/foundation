import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // ✅ Correct way to use environment variables in Vite
    const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_URL}/api/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("adminToken", data.token);
                navigate("/admin/dashboard");
            } else {
                alert(data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Network error");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-16 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-5 text-center">Admin Login</h2>

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border rounded focus:ring focus:border-yellow-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border rounded focus:ring focus:border-yellow-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-white py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
