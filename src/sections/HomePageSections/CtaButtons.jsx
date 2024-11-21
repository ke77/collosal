import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'


const CtaButtonsSection = () => {
    const additionalStyles = {
        
    }

    return (
        <section className='max-w-sm md:max-w-md mt-14 sm:mt-12 mx-auto flex justify-evenly relative'>
            <PrimaryButton text={'Send Quote'} />
            <SecondaryButton text={'Learn More'} additionalStyles={{ width: '185px', height: '48px'}} />
        </section>
    )
}

export default CtaButtonsSection