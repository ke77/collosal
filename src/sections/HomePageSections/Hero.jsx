import React from 'react'


const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center w-1/2 mx-auto text-center mt-20 space-y-6'>
                <h2 className='text-sm text-badgeGreen -mb-4'>CLIENT-DEVELOPMENT DRIVEN</h2>
                <h1 className='text-[34px] font-sans font-bold'>We Design. We Develop. We Ship. <br />In The Same Day.</h1>
                <p className='text-sm text-lighterWhite max-w-lg text-center leading-loose'>We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
            </div>
        </>
    )
}

export default Hero