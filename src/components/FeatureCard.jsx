import React from 'react'



const FeatureCard = ({title, description, Icon}) => {

    return (
        <div className='w-1/3 p-9 px-11 flex flex-col rounded-[3px] justify-around space-y-6 backdrop-blur-md bg-[#FFFFFF0A]'>
            <div className="callout flex items-center justify-center w-[3.4em] h-12 backdrop-blur-3xl shadow-xl rounded-[3px] bg-[#FFFFFF1A]">
                <Icon size={23} className='' />
            </div>

            <div className="content flex flex-col justify-between space-y-4">
                <div className="title">
                    <h2 className='text-xl font-bold pt-2'>{title}</h2>
                </div>

                <div className="description">
                    <p className='text-[13px] text-lighterWhite leading-6'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard