import React from 'react'
import logo from '../IMG/umeed2.png'

const Navbar = () => {
    return (
        <div className='border-b border-yellow-400 flex items-center justify-between py-2 px-[4%]'>
            <div className='py-1'>
                <p className='raleway-logo text-3xl tracking-wider font-medium text-[#2F2F2F]'></p>
                <img src={logo} className='w-36' alt="" />
                {/* <p className='text-xs text-gray-600 font-medium'>ADMIN PANEL</p> */}
            </div>
            {/* <button onClick={() => setToken('')} className='bg-black active:bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2  rounded-full text-xs sm:text-sm'>Logout</button> */}
        </div>
    )
}

export default Navbar
