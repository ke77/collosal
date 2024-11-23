import React from 'react'
import HeroSection from '../sections/HomePageSections/Hero'
import CtaButtons from '../sections/HomePageSections/CtaButtons'
import FeatureCards from '../sections/HomePageSections/FeatureCards'
import LogosSection from '../sections/HomePageSections/Logos'
import HowWeWork from '../sections/HomePageSections/HowWeWork'
import OurTeam from '../sections/HomePageSections/OurTeam'
import Projects from '../sections/HomePageSections/Projects'
import Services from '../sections/HomePageSections/Services'
import Testimonials from '../sections/HomePageSections/Testimonials'
import Callout from '../sections/HomePageSections/Callout'


const HomePage = () => {
    return (
        <section>
            <HeroSection />
            <CtaButtons />
            <FeatureCards />
            <LogosSection />
            <HowWeWork />
            <OurTeam />
            <Projects />
            <Services />
            <Testimonials />
            <Callout />
        </section>
    )
}

export default HomePage