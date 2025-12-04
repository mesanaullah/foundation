import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import img1 from '../IMG/1.png';
import img2 from '../IMG/2.png';

const slides = [
    {
        id: 1,
        title: "Discover New Horizons",
        subtitle: "Explore the world with immersive experiences.",
        image: img1,
    },
    {
        id: 2,
        title: "Adventure Awaits",
        subtitle: "Find your next journey with us.",
        image: img2,
    },
    {
        id: 3,
        title: "Escape Into Nature",
        subtitle: "Reconnect with the beauty around you.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
];

const Hero = () => {

    const [current, setCurrent] = useState(0);
    const slideInterval = useRef(null);


    const startAutoSlide = () => {
        slideInterval.current = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
    };


    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(slideInterval.current);
    }, []);


    return (
        <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
            {/* Slides Wrapper */}
            <div
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-full flex shrink-0 relative"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 sm:px-10 md:px-20">
                            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg max-w-2xl">
                                {slide.title}
                            </h1>
                            <p className="text-white text-base sm:text-lg md:text-2xl mt-3 sm:mt-4 max-w-xl drop-shadow">
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${current === index ? "bg-yellow-400 scale-125" : "bg-white/50"
                            }`}
                    ></button>
                ))}
            </div>


            {/* Prev/Next Buttons */}
            <button
                onClick={() =>
                    setCurrent(current === 0 ? slides.length - 1 : current - 1)
                }
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full hover:bg-yellow-400/30 text-sm sm:text-base"
            ><MdKeyboardArrowLeft className='w-8 h-8' />
            </button>


            <button
                onClick={() =>
                    setCurrent(current === slides.length - 1 ? 0 : current + 1)
                }
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2  text-white p-2 sm:p-3 rounded-full hover:bg-yellow-400/30 text-sm sm:text-base"

            > <MdKeyboardArrowRight className='w-8 h-8' />
            </button>
        </div>
    )
}

export default Hero
