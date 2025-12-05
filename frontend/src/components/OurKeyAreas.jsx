import React from 'react'

const OurKeyAreas = () => {

    const areas = [
        "Skill Development",
        "Employment Creation",
        "Women Empowerment",
        "Rural Livelihood Programs",
        "Education Support",
        "Health & Hygiene Programs",
        "Environment & Social Welfare",
        "Disaster Relief (including COVID-19 Support)",
    ];

    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className=" bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-md transition text-center"
                        >
                            <p className="text-gray-600 text-base leading-relaxed">
                                {area}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurKeyAreas
