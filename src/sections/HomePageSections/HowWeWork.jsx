import React from 'react'
import illustration from '/images/illustrations/How_We_Work_Illustration.svg'


const HowWeWork = () => {
    return (
        <section className='flex flex-col md:flex-row items-center max-w-5xl sm:w-[80%] mx-auto mt-24 space-y-12 sm:space-y-10 md:space-y-0'>
            <div className="illustration md:w-1/2">
                <img src={illustration} alt='how we work' />
            </div>

            <div className="text flex flex-col items-center w-[100%] md:w-1/2 space-y-5 md:space-y-3">
                <h2 className='text-badgeGreen text-sm'>HOW WE WORK?</h2>
                <h1 className='font-bold text-3xl leading-normal md:leading-snug'>Everything is well planned, well designed and developed wholeheartedly</h1>

                <p className='md:text-sm text-lighterWhite leading-9 sm:leading-8 md:leading-8 max-w-md pt-6 sm:pt-1 md:pt-6'>Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</p>
            </div>
        </section>
    )
}

export default HowWeWork