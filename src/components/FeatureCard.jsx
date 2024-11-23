import React from 'react'



const FeatureCard = ({title, description, Icon}) => {

    return (
        <div className='md:w-[65%] lg:w-1/3 p-9 sm:px-11 md:px-14 py-12 sm:py-18 md:py-12 flex flex-col rounded-[3px] justify-between sm:justify-around space-y-14 sm:space-y-14 md:space-y-14 backdrop-blur-md bg-[#FFFFFF0A]'>
            <div className="flex items-center justify-center w-[3.7em] sm:w-[3.3em] sm:px-0 py-4 sm:py-3 backdrop-blur-3xl shadow-xl rounded-[3px] bg-[#FFFFFF0A]">
                <Icon size={24} />
            </div>

            <div className="content flex flex-col items-start justify-between sm:h-[70%] space-y-5 sm:space-y-4">
                <div className="title">
                    <h2 className='text-xl font-bold pt-1'>{title}</h2>
                </div>

                <div className="description">
                    <p className='text-base sm:text-sm text-start pr-3 text-lighterWhite leading-7 sm:leading-6'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard