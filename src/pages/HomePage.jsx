import React from 'react'
import HeroSection from '../sections/HomePageSections/Hero'
import CtaButtonsSection from '../sections/HomePageSections/CtaButtons'
import FeatureCardsSection from '../sections/HomePageSections/FeatureCards'
import LogosSection from '../sections/HomePageSections/Logos'


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CtaButtonsSection />
            <FeatureCardsSection />
            <LogosSection />
        </>
    )
}

export default HomePage