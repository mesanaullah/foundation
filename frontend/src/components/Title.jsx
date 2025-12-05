import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div>
            <div className='inline-flex gap-2 items-center mb-3'>
                <p className=''>{text1}<span className='text-yellow-400 font-medium'>{text2}</span></p>
                <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-yellow-400'></p>
            </div>
        </div>
    )
}

export default Title
