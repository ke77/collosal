import React from 'react'
import FeatureCard from '../../components/FeatureCard'
import { FaFigma } from 'react-icons/fa6'
import { FaCode } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'



const FeatureCardsSection = () => {
    const cardData = [
        {
            id: 1, 
            title: 'Design', 
            description: 'The project interface will be designed first. Our favourite tool is figma.', 
            icon: FaFigma

        },
        {
            id: 2, 
            title: 'Develop', 
            description: 'Transform design and write business logic here. Choose the technology you want.', 
            icon: FaCode
        },
        {
            id: 3, 
            title: 'Ship', 
            description: 'After the work is complete, we will send the project and its assets to you.', 
            icon: FiBox
        }
    ]

    return (
        <section className='w-[85%] sm:w-[70%] md:w-[100%] md:max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between md:space-x-6 space-y-16 md:space-y-0 mt-32 md:mt-20'>
            {cardData.map((card, key) => (
                <FeatureCard key={key} title={card.title} description={card.description} Icon={card.icon} />
            ))}
        </section>
    )
}

export default FeatureCardsSection