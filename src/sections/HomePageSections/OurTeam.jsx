import React from 'react'
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { SecondaryButton } from '../../components/Buttons'
import ourTeam from '/images/illustrations/Team_Illustration.svg'


const OurTeam = () => {
    return (
        <section className='flex items-center max-w-5xl mx-auto mt-24 px-3'>
            <div className="text w-1/2 space-y-3">
                <h2 className='text-badgeGreen text-sm'>OUR TEAM</h2>

                <h1 className='font-bold text-3xl leading-snug'>We're a team of designers, engineers and analysts</h1>

                <p className='text-sm text-lighterWhite leading-loose max-w-md pt-6'>Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.</p>

                <Link to='./index.html' className='pt-4'>
                    <SecondaryButton text={'See Our Teams'} additionalStyles={{paddingTop: '.9em', paddingBottom: '.9rem', marginTop: '2.6em'}} />
                </Link>
            </div>

            <div className="illustration w-1/2">
                <img src={ourTeam} alt="our team illustration" />
            </div>
        </section>
    )
}

export default OurTeam