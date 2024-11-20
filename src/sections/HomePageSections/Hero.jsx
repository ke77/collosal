import React from 'react'


const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center w-[90%] lg:w-1/2 mx-auto text-center mt-24 sm:mt-20 space-y-9 sm:space-y-8'>
                <h2 className='sm:text-sm text-badgeGreen -mb-6 sm:-mb-3'>CLIENT-DEVELOPMENT DRIVEN</h2>
                <h1 className='text-[34px] font-sans font-bold w-[100%]'>We Design. We Develop. We Ship. <br />In The Same Day.</h1>
                <p className='md:text-sm text-lighterWhite max-w-lg text-center leading-loose lg:leading-7 w-[90%] sm:w-[100%]'>We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
            </div>
        </>
    )
}

export default Hero