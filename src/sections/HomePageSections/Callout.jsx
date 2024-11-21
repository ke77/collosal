import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'


const Callout = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-between sm:max-w-4xl lg:max-w-5xl w-[85%] sm:w-auto mx-auto mt-36 py-20 md:py-14 space-y-16 md:space-y-0 border-[#FFFFFF2A] border-t border-b'>
            <div className="text">
                <h1 className='font-bold text-3xl leading-normal sm:leading-snug lg:leading-normal max-w-lg lg:text-left'>We've prepared everything, it's time for you to tell the problem</h1>
            </div>

            <div className="buttons flex flex-col sm:flex-col md:flex-row justify-between w-[80%] sm:w-[70%] md:w-[33%] space-y-4 md:space-y-0">
                <PrimaryButton text={'Send Quote'} additionalStyles={`md:w-[53%] h-[48px]`} />
                <SecondaryButton text={'Ask Us'} additionalStyles={`md:w-[43%] h-[48px]`} />
            </div>
        </section>
    )
}

export default Callout