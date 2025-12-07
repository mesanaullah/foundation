import React, { useState } from "react";
import Title from "../components/Title";
import paymentQr from "../IMG/Payment_Qr_Code.png";

const Donate = () => {

    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="pb-20">
            {/* Heading */}
            <div className="text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400">
                <Title text1="Support " text2="Umeed India Foundation" />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium max-w-3xl mx-auto px-4 mt-2">
                Your contribution provides tools, training, and raw materials to skilled individuals across India.
            </p>

            {/* Donate For */}
            <section className="mt-12 px-6 sm:px-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate For:</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Tools Support",
                        "Raw Material Fund",
                        "Women Empowerment",
                        "Skill Training",
                        "Education Support",
                        "Disaster Relief",
                    ].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedOption(item)}
                            className={`p-6 border border-yellow-400 rounded-xl shadow-sm cursor-pointer text-center font-semibold transition-all ${selectedOption === item
                                    ? "bg-yellow-500 text-white border-yellow-600"
                                    : "bg-white hover:shadow-md"
                                }`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Donation Methods */}
            <section className="mt-16 px-6 sm:px-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Donation Methods</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* UPI */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-400 shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">UPI</h3>
                        <p className="text-gray-700 mb-2">You can donate through UPI using the ID below:</p>

                        <div className="font-bold bg-gray-100 p-3 rounded-lg text-center text-lg">
                            umeedindia@ybl
                        </div>
                    </div>

                    {/* QR Code */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-400 shadow-sm text-center">
                        <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
                        <p className="text-gray-700 mb-4">Scan using any UPI app</p>

                        <img
                            src={paymentQr}
                            alt="Donation QR Code"
                            className="w-48 h-48 mx-auto border rounded-lg shadow"
                        />
                    </div>

                    {/* Bank Transfer */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-400 shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Bank Transfer</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Account Name:</strong> Umeed India Foundation</li>
                            <li><strong>Account Number:</strong> 1234567890</li>
                            <li><strong>IFSC:</strong> ABCD0123456</li>
                            <li><strong>Branch:</strong> New Delhi</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Payment Gateway */}
            <section className="mt-16 px-6 sm:px-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Or Donate Using Payment Gateway</h3>

                <button
                    className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-yellow-600 transition-all"
                    onClick={() => alert("Razorpay / Paytm Gateway Integration Coming Soon!")}
                >
                    Donate Online (Razorpay / Paytm / others)
                </button>
            </section>

            {/* Receipt */}
            <p className="text-center text-gray-700 mt-10 font-medium text-lg">
                📄 Automatic Receipt Generation Available for All Donations
            </p>
        </div>
    )
}

export default Donate
