import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'

const Callout = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-between max-w-5xl w-[85%] sm:w-auto mx-auto mt-36 py-20 md:py-14 space-y-16 md:space-y-0 border-[#FFFFFF2A] border-t border-b'>
            <div className="text">
                <h1 className='font-bold text-3xl leading-normal sm:leading-snug lg:leading-normal max-w-lg lg:text-left'>We've prepared everything, it's time for you to tell the problem</h1>
            </div>

            <div className="buttons flex flex-col sm:flex-col justify-between w-[70%] sm:w-[30%] md:w-[33%] border">
                <PrimaryButton text={'Send Quote'} additionalStyles={{width: '53%'}} />
                <SecondaryButton text={'Ask Us'} additionalStyles={{ width: '43%', height: '48px' }} />
            </div>
        </section>
    )
}

export default Callout