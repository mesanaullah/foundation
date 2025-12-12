import React from 'react'
import { Link } from 'react-router-dom'
import { LuInstagram } from "react-icons/lu";
import { MdFacebook} from "react-icons/md";
import logo from '../IMG/umeed2.png'


const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

                {/* column 1 */}
                <div>
                    <img src={logo} className='mb-5 w-36' alt="" />
                    <p className='w-full sm:w-2/3 text-gray-600'>Umeed India Foundation was established in 2013 with a simple but powerful vision:
                        “Every skilled person in India deserves an opportunity to earn with dignity.”
                        For over 12 years, our NGO has been reaching people who possess skills but lack resources. Instead of giving money, we provide the tools and materials they need to succeed and a guaranteed market to sell their products.
                    </p>
                </div>

                {/* column 2 */}
                <div>
                    <p className='text-xl font-medium mb-5 text-[#2F2F2F]'>COMPNAY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/ourwork'>Our Work</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to=''>Privacy policy</Link>
                    </ul>
                </div>

                {/* column 3 */}
                <div>
                    <p className='text-xl font-medium  mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <p>Umeed India Foundation</p>
                        <p>info@umeedindiafoundation.in</p>
                        <p>+91-9234299707</p>
                        <Link to='https://www.instagram.com/office_umeedindia/' className='flex items-center gap-1'><LuInstagram className='w-4 h-4' />Instagram</Link>
                        <Link to='https://www.facebook.com/people/Umeed-India/61584688093153/?mibextid=wwXIfr&rdid=HHODialgDWzFiOn5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WaoqwiB5b%2F%3Fmibextid%3DwwXIfr' className='flex items-center gap-1'><MdFacebook className='w-5 h-5' />Facebook</Link>
                    </ul>
                </div>
            </div>

            {/* copy rights */}
            <div>
                <hr className='text-yellow-400' />
                <p className='py-5 text-sm text-center text-[#2F2F2F]'>Copyright 2025@ UMEED INDIA FOUNDATION  - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
