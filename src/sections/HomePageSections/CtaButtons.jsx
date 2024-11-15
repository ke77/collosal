import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'


const CtaButtonsSection = () => {

    return (
        <section className='max-w-md mt-10 mx-auto flex justify-evenly relative'>
            <PrimaryButton text={'Send Quote'} />
            <SecondaryButton text={'Learn More'} additionalStyles={{width: '185px', height: '48px'}} />
        </section>
    )
}

export default CtaButtonsSection