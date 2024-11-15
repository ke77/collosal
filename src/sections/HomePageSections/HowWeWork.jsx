import React from 'react'
import illustration from '/images/illustrations/How_We_Work_Illustration.svg'


const HowWeWork = () => {
    return (
        <section className='flex items-center max-w-5xl mx-auto mt-24'>
            <div className="illustration w-1/2">
                <img src={illustration} alt='how we work' />
            </div>

            <div className="text w-1/2 space-y-3">
                <h2 className='text-badgeGreen text-sm'>HOW WE WORK?</h2>
                <h1 className='font-bold text-3xl leading-snug'>Everything is well planned, well designed and developed wholeheartedly</h1>

                <p className='text-sm text-lighterWhite leading-loose max-w-md pt-6'>Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</p>
            </div>
        </section>
    )
}

export default HowWeWork