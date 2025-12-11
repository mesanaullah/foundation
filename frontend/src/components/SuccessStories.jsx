import React, { useRef } from 'react'
import Title from './Title';
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import sita from '../IMG/stories/sita.jpeg'
import sandeep from '../IMG/stories/sandeep.jpeg'
import sonu from '../IMG/stories/sonu.jpeg'
import rohit from '../IMG/stories/rohit.jpeg'
import khushi from '../IMG/stories/khushi.jpeg'

const feedbackData = [

    {
        name: "Sita Kumari",
        state: "Jharkhand",
        image: sita,
        rating: 5,
        message1: "My name is Sita Kumari, and I am from Jharkhand. With the help of Ummed India Foundation, I received a very good job opportunity with a salary range of ₹18,000 to ₹45,000. The entire process was smooth, transparent, and completely supportive. The team guided me at every step and helped me get the best job for my profile",
        message2: "Today, I am stable in my career, and I give full credit to Ummed India Foundation. I highly recommend their service to anyone looking for a job. Thank you, Ummed India Foundation!"
    },

    {
        name: "Sandeep Kumar",
        state: "Telangana",
        image: sandeep,
        rating: 5,
        message1: "I am Sandeep Kumar from Telangana, and I'm truly impressed with Ummed India Foundation. They helped me get a genuine job opportunity with a salary range of ₹18,000 to ₹45,000. What I liked most was their professional communication and step-by-step guidance.",
        message2: "The team made the entire process stress-free and clear. Within a short time, I received my offer letter and started working. I'm very satisfied with their service and grateful for the support. If you are searching for a reliable job placement, I strongly recommend Ummed India Foundation. They really deliver what they promise!"
    },

    {
        name: "Sonu Ray",
        state: "Delhi",
        image: sonu,
        rating: 5,
        message1: "My name is Sonu Ray from Delhi. I am very happy with the support I received from Ummed India Foundation. They guided me properly, explained everything clearly, and helped me get a good and genuine job opportunity.",
        message2: "The entire process was smooth, fast, and completely transparent. I confidently recommend Ummed India Foundation to everyone who is looking for a trustworthy job placement service."
    },

    {
        name: "Rohit Kumar",
        state: "Rajasthan",
        image: rohit,
        rating: 5,
        message1: "I'm Rohit Kumar from Rajasthan, and my experience with Ummed India Foundation has truly motivated me. Their support and guidance helped me believe in myself and move forward with confidence.",
        message2: "The team encouraged me at every step, provided clear direction, and helped me find the right job opportunity. Their positive attitude and professional approach inspired me to keep trying and never give up on my goals,  I am grateful to Ummed India Foundation for showing me that with the right guidance and hard work, success is always possible."
    },

    {
        name: "Khushi Kumari",
        state: "Bihar",
        image: khushi,
        rating: 5,
        message1: "My name is Khushi Kumari, and I am from Bihar. My experience with Ummed India Foundation has been truly outstanding. From the very first interaction, their team supported me with clarity, professionalism, and genuine care.",
        message2: "Every part of the process was smooth, well-organized, and completely transparent. They understood my needs, guided me step-by-step, and helped me find the right job opportunity without any stress, I am highly impressed by their dedication, honesty, and commitment toward job seekers.I proudly give Ummed India Foundation a full 5-star rating!"
    },
];

const SuccessStories = () => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    };

    // Render stars based on rating
    const renderStars = (rating) => {
        return (
            <div className="flex justify-center mt-3">
                {[1, 2, 3, 4, 5].map((num) => (
                    <FaStar
                        key={num}
                        className={`
                            text-lg mx-1 
                            ${num <= rating ? "text-yellow-400" : "text-gray-300"}
                        `}
                    />
                ))}
            </div>
        );
    };

    return (

        <div className="w-full relative py-10">
            <div className='text-2xl sm:text-3xl text-center pt-4 sm:pt-6'>
                <Title text1={'Success '} text2={'Stories'} />
            </div>

            {/* Scroll Buttons */}
            <button
                onClick={scrollLeft}
                className="hidden sm:flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full z-20 hover:bg-yellow-200"
            >
                <FaChevronLeft size={20} className="text-gray-700 w-5 h-5" />
            </button>

            <button
                onClick={scrollRight}
                className="hidden sm:flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full z-20 hover:bg-yellow-200"
            >
                <FaChevronRight size={20} className="text-gray-700 w-5 h-5" />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 mt-8 hide-scrollbar"
            >
                {feedbackData.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[320px] sm:min-w-[380px] bg-white shadow-sm rounded-xl p-6 snap-center flex flex-col"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 rounded-full object-cover mx-auto"
                        />

                        <p className="mt-4 text-xl font-semibold text-center">{item.name}</p>
                        <p className="text-center text-gray-500 text-sm">{item.state}</p>

                        {/* ⭐ Rating */}
                        {renderStars(item.rating)}

                        <p className="mt-4 text-gray-700 text-sm text-justify leading-relaxed">{item.message1}</p>
                        <p className="mt-2 text-gray-700 text-sm text-justify leading-relaxed">{item.message2}</p>
                    </div>
                ))}
            </div>

            <style>
                {`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}
            </style>
        </div>
    )
}

export default SuccessStories;
