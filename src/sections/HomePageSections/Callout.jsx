import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'

const Callout = () => {
    return (
        <section className='flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto mt-36 py-10 border-[#FFFFFF2A] border-t border-b'>
            <div className="text">
                <h1 className='font-bold text-3xl leading-snug max-w-lg mx-auto'>We've prepared everything, it's time for you to tell the problem</h1>
            </div>

            <div className="buttons flex justify-between w-[33%]">
                <PrimaryButton text={'Send Quote'} additionalStyles={{width: '53%'}} />
                <SecondaryButton text={'Ask Us'} additionalStyles={{ width: '43%', height: '48px' }} />
            </div>
        </section>
    )
}

export default Callout