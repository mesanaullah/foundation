import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {

    const phoneNumber = "+91 9234299707"; // your number without "+" sign

    const openWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}?text=Hello! I need assistance.`, "_blank");
    };

    return (
        <div
            onClick={openWhatsApp}
            className="
                fixed bottom-4 sm:bottom-6 right-4 sm:right-6 
                bg-green-500 text-white 
                w-12 h-12 flex items-center justify-center 
                rounded-full shadow-lg cursor-pointer z-50 
                hover:bg-green-600 transition-all
            "
        >
            <FaWhatsapp className='w-8 h-8' />
        </div>
    )
}

export default Whatsapp
