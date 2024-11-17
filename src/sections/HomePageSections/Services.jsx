import React from 'react'
import ServiceCards from '../../components/ServiceCards'


const Services = () => {
    return (
        <section id='#services' className='flex flex-col items-center justify-evenly h-[680px] max-w-6xl mx-auto text-center mt-24 bg-[#221048] rounded-[30px]'>
            <div className="text space-y-2 h-[15%] -mt-5">
                <h2 className='text-badgeGreen text-sm'>GET STARTED</h2>
                <h1 className='font-bold text-3xl leading-snug max-w-lg mx-auto'>What do you need? Choose a service that can help you</h1>
            </div>

            <div className="cards-container w-[80%] h-[55%]">
                <ServiceCards />
            </div>
        </section>
    )
}

export default Services