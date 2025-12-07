import React from 'react'
import Title from '../components/Title'
import { FaCheckCircle } from "react-icons/fa";


const OurModel = () => {

    const steps = [
        {
            step: "Step 1 — Skill Identification",
            description:
                "Our field team meets individuals across India and identifies their skills — woodwork, tailoring, food making, bamboo craft, metal work, home products, local art, and more."
        },
        {
            step: "Step 2 — Tools & Raw Material Support",
            description:
                "We provide high-quality tools and raw materials required to start the work. Not free — but offered through zero-interest EMI, so beneficiaries learn responsibility without financial pressure."
        },
        {
            step: "Step 3 — Production",
            description:
                "Beneficiaries create products using their skills and tools provided by us."
        },
        {
            step: "Step 4 — Guaranteed Buy-Back",
            description:
                "We purchase 100% of their created products at fair market prices."
        },
        {
            step: "Step 5 — Selling & Market Support",
            description:
                "We handle selling through online marketplaces (Amazon, Meesho, Flipkart etc.), offline exhibitions, corporate orders, and retail partners."
        },
        {
            step: "Step 6 — Repeat Cycle",
            description:
                "We again provide raw materials → they create products → we buy and sell → they earn. This becomes a continuous, tension-free earning system."
        }
    ];

    return (
        <div >
            <div className='text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400'>
                <Title text1={'Our '} text2={'Model'} />
            </div>
            <p className="text-center text-gray-700 text-lg font-medium mb-8">India's First Guaranteed Buy-Back Program </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl shadow-md border border-yellow-300 bg-white hover:shadow-lg transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-yellow-500 text-xl" />
                            <h3 className="text-lg font-semibold">{item.step}</h3>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurModel
