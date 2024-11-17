import React from 'react'
import quoteBadge from '/images/testimonials/Quote_Badge.png'


const Testimonial = ({id, avatarSrc, name, company, quote, specialStyling=''}) => {
    return (
        <div className={`testimonial w-1/3 flex flex-col justify-evenly items-center bg-[#FFFFFF1A] rounded ${specialStyling}`}>
            <div className="details-box flex flex-col items-center justify-around w-[50%] h-[42%]">
                <div className="image-container relative">
                    <img src={avatarSrc} alt={name} />
                    <img src={quoteBadge} alt="quote badge icon" className='absolute left-[3.9em] bottom-[.7px]' />
                </div>

                <div className='space-y-1'>
                    <h1 className='text-sm'>{name}</h1>
                    <h2 className='text-[13px] text-lighterWhite'>{company}</h2>
                </div>
            </div>

            <div className="quote-box flex items-center w-[75%] h-[28%]">
                <p className={`text-[13px] leading-8 ${id === 2 ? 'text-white' : 'text-lighterWhite'}`}>{quote}</p>
            </div>
        </div>
    )
}






const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            avatarSrc: '/images/testimonials/AvatarCourtney.svg',
            name: 'Courtney Henry',
            company: 'Biffco Enterprises Ltd.',
            quote: '"Very easy to use. I made back the purchase price in just 48 hours! It\'s great. It\'s is both attractive and highly adaptable."',
        },
        {
            id: 2,
            avatarSrc: '/images/testimonials/AvatarHoward.svg',
            name: 'Esther Howard',
            company: 'Abstergo Ltd.',
            quote: '"Your company is truly upstanding and is behind its product 100%. It\'s the perfect solution for our business. It has really helped our business."',
            specialStyling: 'border-[1.8px] border-primary relative -top-[3.2em]'
        },
        {
            id: 3,
            avatarSrc: '/images/testimonials/AvatarRonald.svg',
            name: 'Ronald Richards',
            company: 'Barone LLC',
            quote: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. It\'s is exactly what our business has been lacking. "',
        },
    ]



    return (
        <section className='flex flex-col justify-center items-center text-center max-w-[70rem] h-[40em] mx-auto mt-28 sm:space-y-36'>
            <div className="text h-[15%]">
                <h2 className='text-badgeGreen text-sm'>TESTIMONIAL</h2>
                <h1 className='font-bold text-3xl leading-snug max-w-lg mx-auto'>What do our clients say that we never let down?</h1>
            </div>

            <div className="cards-container flex flex-col sm:flex-row h-[60%] space-y-4 sm:space-y-0 sm:space-x-8">
                {
                    testimonialData.map((testimonialCard) => (
                        <Testimonial 
                            key={testimonialCard.id}
                            id={testimonialCard.id} 
                            avatarSrc={testimonialCard.avatarSrc}
                            name={testimonialCard.name}
                            company={testimonialCard.company}
                            quote={testimonialCard.quote}
                            specialStyling={testimonialCard.specialStyling}
                        />
                    ))
                }
            </div>

            {/* <div className="carousel-indicator">

            </div> */}
        </section>
    )
}

export default Testimonials