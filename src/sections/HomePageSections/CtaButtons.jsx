import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'


const CtaButtonsSection = () => {

    return (
        <section className='w-[70%] sm:w-[60%] md:max-w-sm md:space-x-4 mt-14 sm:mt-12 mx-auto flex sm:flex-row flex-col justify-evenly relative -z-1 space-y-5 sm:space-y-0'>
            <PrimaryButton text={'Send Quote'} additionalStyles={`md:w-[185px] h-[48px]`} />
            <SecondaryButton text={'Learn More'} additionalStyles={`md:w-[185px] h-[48px]`} />
        </section>
    )
}

export default CtaButtonsSection