import React from 'react'
import HeroSection from '../sections/HomePageSections/Hero'
import CtaButtonsSection from '../sections/HomePageSections/CtaButtons'
import FeatureCardsSection from '../sections/HomePageSections/FeatureCards'
import LogosSection from '../sections/HomePageSections/Logos'
import HowWeWork from '../sections/HomePageSections/HowWeWork'
import OurTeam from '../sections/HomePageSections/OurTeam'
import Projects from '../sections/HomePageSections/Projects'


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CtaButtonsSection />
            <FeatureCardsSection />
            <LogosSection />
            <HowWeWork />
            <OurTeam />
            <Projects />
        </>
    )
}

export default HomePage