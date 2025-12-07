import React from 'react'
import Title from '../components/Title'
import carpenter from '../IMG/carpenter.jpg'
import pickel from '../IMG/pickel.png'
import craftman from '../IMG/craftman.jpg'

const Stories = () => {
    const stories = [
        {
            id: 1,
            name: "Ramesh (Carpenter)",
            description: "Ramesh had the skills but no tools. We provided him a carpentry toolkit on zero-interest EMI and bought the furniture he created. Today he earns ₹25,000–₹30,000 per month through continuous work.",
            image: carpenter,
        },
        {
            id: 2,
            name: "Meera (Pickle Maker)",
            description: "Meera's homemade pickles were excellent but she had no market. We helped her with raw materials, packaging, and buy-back. Today her products are sold online nationwide.",
            image: pickel,
        },
        {
            id: 3,
            name: "Sameer (Bamboo Craftsman)",
            description: "We supported Sameer with tools and bamboo. Now his handcrafted products are displayed across exhibitions and online stores.",
            image: craftman,
        },
    ];

    return (
        <div className="pb-16">
            {/* Page Heading */}
            <div className="text-2xl sm:text-3xl text-center pt-4 sm:pt-6 border-t border-yellow-400">
                <Title text1="Success " text2="Stories" />
            </div>

            <p className="text-center text-gray-700 text-lg font-medium max-w-2xl mx-auto">
                Real Stories. Real People. Real Impact.
            </p>

            {/* Stories Section */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-10">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="bg-white shadow-md border border-yellow-400 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                    >
                        {/* Image */}
                        <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-64 object-cover"
                        />

                        {/* Content */}
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {story.name}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {story.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-14">
                <p className="text-lg text-gray-700 font-medium mb-4">
                    Want to change your life too?
                </p>
                <a
                    href="/apply"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 font-semibold rounded-lg transition-all"
                >
                    Apply to Become a Beneficiary
                </a>
            </div>
        </div>
    )
}

export default Stories
