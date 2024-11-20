import React from 'react'
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'



const ServiceCard = ({name, price, platform, structure, revisions, pricePerAddition, bgColor}) => {
    return (
        <div className={`card sm:w-[90%] md:w-1/3 h-full flex flex-col justify-end items-center rounded-[10px] lg:pb-14 bg-${bgColor}`}>
            <div className="card-content w-[75%] h-[85%] py-12 sm:py-14 md:py-0 space-y-12 md:space-y-9">
                <div className="top-section flex justify-between">
                    <div className="name">
                        <h2 className='text-sm font-semibold'>{name}</h2>
                    </div>
                    <div className="pricing flex flex-col">
                        <h2 className='text-xs text-lighterWhite text-left'>Starting From</h2>
                        <h1 className='text-4xl font-bold'>{price}</h1>
                    </div>
                </div>

                <div className="description pt-8 sm:pt-4 space-y-4 md:space-y-3">
                    <p className='text-sm md:text-sm sm:text-base'>{platform}</p>
                    <p className='text-sm md:text-sm sm:text-base'>{structure}</p>
                    <p className='text-sm md:text-sm sm:text-base'>{revisions}</p>
                    <p className='text-sm md:text-sm sm:text-base'>{pricePerAddition}</p>
                </div>

                <div>
                    <Link>
                        <button type="button" className={`w-full py-2 border bg-white text-sm  sm:text-lg md:text-base rounded text-${bgColor} hover:bg-[#f0f0f0] duration-200`}>Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}




const ServiceCards = () => {
    const cardData = [
        {
            name: 'UI Design',
            price: '1200$',
            platform: '10 design pages',
            structure: 'Well-documented',
            revisions: '4 revisions',
            pricePerAddition: '$100/additional page',
            bgColor: 'purple'
        },
        {
            name: 'Development',
            price: '5000$',
            platform: 'Web & Mobile',
            structure: 'Well-documented',
            revisions: '8 revisions',
            pricePerAddition: '$1000/additional feature',
            bgColor: 'mazarine'
        },
        {
            name: 'Maintenance',
            price: '3000$',
            platform: 'Daily backup',
            structure: '3 hours of maintainance',
            revisions: 'Including fixing',
            pricePerAddition: '$50/additional hour',
            bgColor: 'byzantium'
        }
    ];

    return (
        <div className='flex flex-col sm:items-center sm:w-[100%] md:flex-row h-full md:space-x-5 space-y-12 sm:space-y-16 md:space-y-0'>
            {cardData.map((card, index) => (
                <ServiceCard 
                    key={index} 
                    name={card.name} 
                    price={card.price} 
                    platform={card.platform} 
                    structure={card.structure} 
                    revisions={card.revisions} 
                    pricePerAddition={card.pricePerAddition} 
                    bgColor={card.bgColor}
                />
            ))}
        </div>
    )
}

export default ServiceCards