import React from 'react'
import FeatureCard from '../../components/FeatureCard'
import { FaFigma } from 'react-icons/fa6'
import { FaCode } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
// import box from '/images/icons/box.png'
// import { FaFigma } from 'react-icons/fa/fab'


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
        <section className='sm:max-w-5xl mx-auto flex flex-col sm:flex-row justify-between space-x-6 mt-20 '>
            {cardData.map((card, key) => (
                <FeatureCard key={key} title={card.title} description={card.description} Icon={card.icon} />
            ))}
            {/* <FeatureCard title={cardData[0].title} description={cardData[0].description} icon=<FaFigma/> />
            <FeatureCard title={cardData[1].title} description={cardData[1].description} icon=<FaCode/> />
            <FeatureCard title={cardData[2].title} description={cardData[2].description} icon=<FiBox/> /> */}
        </section>
    )
}

export default FeatureCardsSection