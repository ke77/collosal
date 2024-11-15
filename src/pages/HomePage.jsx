import React from 'react'
import HeroSection from '../sections/HomePageSections/Hero'
import CtaButtonsSection from '../sections/HomePageSections/CtaButtons'
import FeatureCardsSection from '../sections/HomePageSections/FeatureCards'
import LogosSection from '../sections/HomePageSections/Logos'
import HowWeWork from '../sections/HomePageSections/HowWeWork'
import OurTeam from '../sections/HomePageSections/OurTeam'


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CtaButtonsSection />
            <FeatureCardsSection />
            <LogosSection />
            <HowWeWork />
            <OurTeam />
        </>
    )
}

export default HomePage