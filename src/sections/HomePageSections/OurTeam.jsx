import React from 'react'
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { SecondaryButton } from '../../components/Buttons'
import ourTeamIllustration from '/images/illustrations/Team_Illustration.svg'


const OurTeam = () => {
    return (
        <section id='about' className='flex flex-col md:flex-row items-center md:max-w-4xl lg:max-w-5xl mx-auto mt-36 md:mt-24 px-3 space-y-20 md:space-y-0'>
            <div className="text flex flex-col items-center md:items-start w-[100%] sm:w-[80%] md:w-1/2 space-y-4 sm:space-y-3 md:space-y-2">
                <h2 className='text-badgeGreen text-sm'>OUR TEAM</h2>

                <h1 className='font-bold text-3xl leading-normal sm:leading-snug md:text-start'>We're a team of designers, engineers and analysts</h1>

                <p className='md:text-sm text-lighterWhite leading-loose md:leading-8 sm:leading-loose w-[95%] md:max-w-md pt-6 md:text-start'>Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.</p>

                <Link to='./index.html' className='pt-4 md:pt-0'>
                    <SecondaryButton text={'See Our Teams'} additionalStyles={`py-[1em] mt-[2em]`} />
                </Link>
            </div>

            <div className="illustration w-[90%] sm:w-3/4 md:w-1/2">
                <img src={ourTeamIllustration} alt="our team illustration" />
            </div>
        </section>
    )
}

export default OurTeam