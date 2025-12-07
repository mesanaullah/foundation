import React from 'react'
import Title from '../components/Title'
import food from '../IMG/food.jpg'
import eduaction from '../IMG/education.jpg'
import healthcare from '../IMG/healthcare.jpg'


const OurWork = () => {

    const skilledWork = [
        "Wooden Furniture",
        "Carpentry",
        "Bamboo Craft",
        "Tailoring & Stitching",
        "Handmade Toys",
        "Food Products (Pickle, Papad, Snacks)",
        "Clay & Terracotta Work",
        "Art & Painting",
        "Agriculture Tools",
        "Metal Work",
        "Beauty & Wellness",
        "Electrical Repair",
        "Plumbing",
        "Mechanic Support",
        "Leather Crafts",
        "Handloom & Weaving",
        "Soap & Homemade Products",
        "...and more",
    ];

    const otherSectors = [
        "Free Education Support",
        "Stationery Distribution",
        "School Fee Assistance",
        "Women Safety Awareness",
        "Health Camps",
        "Blood Donation Drives",
        "Sanitation & Hygiene",
        "Environment Awareness",
        "Road Safety Programs",
        "Disaster Relief & Corona Support",
    ];

    const workItems = [
        {
            title: "Food Distribution",
            desc: "Providing meals to those in need",
            image: food,
        },
        {
            title: "Education",
            desc: "Supporting children's education",
            image: eduaction,
        },
        {
            title: "Healthcare",
            desc: "Providing medical assistance",
            image: healthcare,
        },
    ];

    return (
        <div>
            <section className=''>
                <div className="text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400">
                    <Title text1={'OUR '} text2={'WORK'} />
                    <p className='text-lg text-gray-600 pt-0'>We Work Across All Skill Categories</p>
                </div>

                <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Skilled Work Section */}
                    <div className="bg-white p-8 rounded-md shadow-sm">
                        <h3 className="text-xl font-bold text-black mb-6">
                            Skilled Work Support
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {skilledWork.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-gray-600 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other NGO Sectors */}
                    <div className="bg-white p-8 rounded-md shadow-sm">
                        <h3 className="text-xl font-bold text-black mb-6">
                            Other NGO Sectors
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {otherSectors.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-gray-600 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className='mt-2 text-2xl sm:text-3xl text-center'>
                    <Title text1={'Our Key '} text2={'Initiatives'} />
                </div>
                <div className="sm:py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {workItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md shadow-sm hover:shadow-xl transition overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-black">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default OurWork
