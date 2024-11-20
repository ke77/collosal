import React from 'react'
import ServiceCards from '../../components/ServiceCards'


const Services = () => {
    return (
        <section id='services' className='flex flex-col items-center justify-evenly md:h-[680px] max-w-6xl mx-auto text-center mt-32 sm:mt-24 bg-[#221048] lg:rounded-[30px] py-24 md:py-0 space-y-24 md:space-y-0'>
            <div className="text space-y-4 sm:space-y-2 w-[85%] h-[15%] -mt-5">
                <h2 className='text-badgeGreen text-sm'>GET STARTED</h2>
                <h1 className='font-bold text-3xl leading-normal sm:leading-snug max-w-lg mx-auto'>What do you need? Choose a service that can help you</h1>
            </div>

            <div className="cards-container w-[85%] sm:w-[70%]md:w-[85%] h-[55%]">
                <ServiceCards />
            </div>
        </section>
    )
}

export default Services