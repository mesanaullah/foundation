import React from 'react'
import Title from '../components/Title.jsx'
import about from '../IMG/aboutUs.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className='text-2xl sm:text-3xl text-center pt-4 sm:pt-8 border-t border-yellow-400'>
                <Title text1={'ABOUT '} text2={'US'} />
            </div>

            <div className='my-2 sm:my-4 flex flex-col sm:flex-row gap-16'>
                <img className='w-full sm:max-w-[450px] aspect-4/3 object-cover' src={about} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 mb-4'>
                    <b>UMEED INDIA FOUNDATION</b>
                    <p>Umeed India Foundation was established in 2013 with a simple but powerful vision:</p>

                    <p>“Every skilled person in India deserves an opportunity to earn with dignity.”</p>

                    <p>For over 12 years, our NGO has been reaching people who possess skills but lack resources. Instead of giving money, we provide the tools and materials they need to succeed — and a guaranteed market to sell their products.</p>

                    <b className=''>Our Mission</b>
                    <p>To empower every skilled and talented individual by providing tools, resources, opportunities, and a sustainable earning system.</p>

                    <b>Our Vision</b>
                    <p>A self-reliant India where no skilled person remains unemployed.</p>
                </div>
            </div>

            <b>Founder's Message (SUSHIL KUMAR - B.Tech)</b>
            <p className='mt-2'>India is full of talented people — carpenters, tailors, craftsmen, food makers, bamboo workers, artists, and creators. Many struggle not because they lack skill, but because they lack tools and opportunities.</p>

            <p className='mt-2'>Umeed India Foundation bridges this gap by giving them the power to earn with dignity. Together, let's build a stronger, self-employed India.</p>
        </div>
    )
}

export default AboutUs
