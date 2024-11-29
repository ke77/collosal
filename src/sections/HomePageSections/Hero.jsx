import React from 'react'
import { Slide } from 'react-awesome-reveal'


const Hero = () => {
    return (
        <div className='flex flex-col items-center w-[94%] lg:w-1/2 mx-auto text-center mt-20 sm:mt-20 space-y-9 sm:space-y-8 z-1'>
            <Slide direction='down' duration={1500} triggerOnce={true} >
                <h2 className='text-[15px] sm:text-sm text-badgeGreen -mb-6 sm:-mb-5'>CLIENT-DEVELOPMENT DRIVEN</h2>
                <h1 className='text-[32px] sm:text-[34px] font-sans font-bold w-[100%]'>We Design. We Develop. We Ship. <br />In The Same Day.</h1>
                <p className='md:text-base text-lighterWhite max-w-lg text-center leading-loose lg:leading-7 w-[95%] sm:w-[100%]'>We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>

            </Slide>
        </div>
    )
}

export default Hero