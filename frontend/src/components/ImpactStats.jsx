import React from 'react'


const ImpactStats = () => {

    const stats = [
        { value: "12+", label: "Years of Service (Since 2013)" },
        { value: "2,00,000+", label: "Beneficiaries Supported" },
        { value: "500+", label: "Skills Empowered" },
        { value: "Pan-India", label: "Operations" },
    ];

    return (
        <section className="w-full mb-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
                    >
                        <h2 className="text-2xl font-extrabold text-yellow-400">
                            {stat.value}
                        </h2>
                        <p className="text-gray-600 mt-2 text-base">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ImpactStats
