import React from 'react'
import Title from './Title'
import ImpactStats from './ImpactStats'
import OurKeyAreas from './OurKeyAreas'

const WhoWeAre = () => {
    return (
        <div className='my-10'>

            {/* -----------Who we are?------------ */}
            <div className='text-center py-8 text-2xl sm:text-3xl'>
                <Title text1={'Who '} text2={'We Are ?'} />
                <p className='w-3/4 m-auto text-sm sm:text-base md:text-lg text-[#2F2F2F]'>Umeed India Foundation is a nationwide NGO dedicated to creating employment, supporting skilled individuals, and transforming lives through practical, dignity-based assistance. Since 2013, we have empowered thousands of talented individuals by providing them with tools, raw materials, skill training, and guaranteed buy-back of their finished products — ensuring that no skilled person remains unemployed in India.</p>
            </div>

            {/* -----------What makes us unique?------------ */}
            <div className='text-center py-8 text-2xl sm:text-3xl'>
                <Title text1={'What Makes Us  '} text2={'Unique'} />
            </div>

            <div className='flex flex-col sm:flex-row mb-20 text-base'>
                <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Tools Instead of Money:</b>
                    <p className='text-gray-600'>We don't give money — we provide professional tools and raw materials so people can start working immediately.</p>
                </div>

                <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Interest-Free EMI Support:</b>
                    <p className='text-gray-600'>Tools are provided with zero-interest EMI, so beneficiaries never feel burdened.</p>
                </div>

                <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Guaranteed Buy-Back:</b>
                    <p className='text-gray-600'>Whatever the beneficiary creates — we purchase it directly and sell it via online & offline markets.</p>
                </div>
            </div>

            {/* -----------Impact stats------------ */}
            <div className='text-center py-8 text-2xl sm:text-3xl'>
                <Title text1={'Impact '} text2={'Statistics'} />
            </div>
            <ImpactStats />

            {/* -------------OurKeyAreas------------ */}
            <div className='text-center py-8 text-2xl sm:text-3xl'>
                <Title text1={'Our Key '} text2={'Areas'} />
            </div>
            <OurKeyAreas />
        </div>
    )
}

export default WhoWeAre
