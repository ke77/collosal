import React from 'react'
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'



const ServiceCard = ({name, price, platform, structure, revisions, pricePerAddition, bgColor}) => {
    return (
        <div className={`card w-1/3 h-full flex flex-col justify-end items-center rounded-[10px] bg-${bgColor}`}>
            <div className="card-content w-[70%] h-[85%] space-y-8">
                <div className="top-section flex justify-between">
                    <div className="name">
                        <h2 className='text-sm font-semibold'>{name}</h2>
                    </div>
                    <div className="pricing flex flex-col">
                        <h2 className='text-xs text-lighterWhite text-left'>Starting From</h2>
                        <h1 className='text-4xl font-bold'>{price}</h1>
                    </div>
                </div>

                <div className="description pt-4 space-y-3">
                    <p className='text-sm'>{platform}</p>
                    <p className='text-sm'>{structure}</p>
                    <p className='text-sm'>{revisions}</p>
                    <p className='text-sm'>{pricePerAddition}</p>
                </div>

                <div>
                    <Link>
                        <button type="button" className={`w-full py-2 border bg-white text-sm rounded text-${bgColor}`}>Detail</button>
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
        <div className='flex flex-col sm:flex-row h-full space-x-5 space-y-5 sm:space-y-0'>
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