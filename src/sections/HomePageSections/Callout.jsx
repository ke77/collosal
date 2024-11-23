import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'
import { Ellipse1, Ellipse2 } from '../../components/Ellipses'


const Callout = () => {
    return (
        <>
            <div className='absolute z-[-100] mt-[190%] md:mt-96 ml-4 md:ml-20 w-16'>
                <Ellipse2 />
            </div>

            <div className='absolute z-[-100] mt-[45%] md:mt-[9%] ml-[90%] md:ml-[90%]'>
                <Ellipse1 />
            </div>

            <section className='flex flex-col md:flex-row items-center justify-between sm:max-w-3xl lg:max-w-4xl w-[85%] sm:w-[90%] md:w-[85%] mx-auto mt-36 md:mt-40 py-20 md:py-14 space-y-16 md:space-y-0 border-[#FFFFFF2A] border-t border-b'>
                <div className="text">
                    <h1 className='font-bold text-3xl leading-normal sm:leading-snug lg:leading-normal max-w-lg lg:text-left'>We've prepared everything, it's time for you to tell the problem</h1>
                </div>

                <div className="buttons flex flex-col sm:flex-col md:flex-row justify-between w-[80%] sm:w-[70%] md:w-[33%] space-y-4 md:space-y-0">
                    <PrimaryButton text={'Send Quote'} additionalStyles={`md:w-[53%] h-[48px]`} />
                    <SecondaryButton text={'Ask Us'} additionalStyles={`md:w-[43%] h-[48px]`} />
                </div>
            </section>
        </>
    )
}

export default Callout