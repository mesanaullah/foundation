import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import clsx from "clsx";
import logo from '../IMG/umeed2.png'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "ABOUT US", href: "/about" },
        { name: "OUR MODEL", href: "/our-model" },
        { name: "OUR WORK", href: "/ourwork" },
        { name: "STORIES", href: "/stories" },
        // { name: "GOV. LEGAL", href: "/government" },
        { name: "APPLY", href: "/apply" },
        // { name: "PRODUCTS", href: "/products" },
        { name: "MEDIA", href: "/media" },
        { name: "CAREER", href: "/career" },
        { name: "CONTACT US", href: "/contact" },
        { name: "DONATE", href: "/donate" },
    ];

    return (
        <div className='flex justify-between items-center py-5 font-medium w-full'>


            {/* ------------------Logo------------------------ */}
            <Link to='/'>
                <img src={logo} className='w-32' alt="" />
                {/* <p className='text-2xl tracking-wider font-medium'>Foundation</p> */}
            </Link>

            {/* ------Destop Menu------ */}
            <ul className="hidden sm:flex gap-3 md:gap-5 text-xs md:text-sm">
                {navItems.filter((item) => item.name !== "DONATE").map((item, i) => (
                    <NavLink key={i} to={item.href}>
                        <p className='active:text-yellow-400'>{item.name}</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-yellow-500 hidden' />
                    </NavLink>
                ))}

                {/* {navItems.map((item, i) => (
                    <Link key={i} to={item.href}>
                        <p>{item.name}</p>
                    </Link>
                ))} */}
            </ul>

            {/* Donate Button and Apply buttton */}
            <div className='hidden sm:flex gap-4'>
                <Link to='/donate' className='relative'>
                    <p className='text-xs md:text-sm bg-yellow-400 active:bg-amber-500 py-2 px-3 md:px-4 rounded-sm'>DONATE</p>
                </Link>
            </div>

            {/* mobile menu */}

            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="sm:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <IoMdClose className='h-6 w-6' /> : <IoMdMenu className='h-6 w-6' />}{" "}
            </button>

            <div
                className={clsx(
                    "fixed inset-0 bg-white backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <Link
                            key={key}
                            to={item.href}
                            className="text-sm hover:text-yellow-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default Navbar

