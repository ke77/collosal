import React from 'react'
import mobile from '/images/illustrations/screen_illustrations/mobile_layout/mobile.svg'
import bigRectangle from '/images/illustrations/screen_illustrations/mobile_layout/Big_Rectangle.svg'
import smallRectangle from '/images/illustrations/screen_illustrations/mobile_layout/Small_Rectangle.svg'


const ProjectCardMobile = ({mobileOrder}) => {
    return (
        <div className={`w-1/2 flex flex-col justify-between ${mobileOrder}`}>
            <div className="layout h-[72%] flex flex-col items-center justify-between border border-[#FFFFFF1A] bg-[#161629] rounded-sm">
                <div className="tabs h-[27%] flex flex-col items-center justify-end space-y-2"> 
                    <img src={bigRectangle} alt="big rectangle" className='w-[80%]' />
                    <img src={smallRectangle} alt="small rectangle" className='w-[50%]' />
                </div>
                <div className="screen mobile-screen w-[34%]">
                    <img src={mobile} alt="mobile screen" />
                </div>
            </div>

            <div className="details flex flex-col justify-end h-[26%] space-y-5">
                <h2 className='text-sm'>The Mobile App Landing Page</h2>

                <h3 className='text-sm text-lighterWhite'>A landing page for mobile app</h3>

                <button type="button" className='border border-white w-28 mx-auto rounded-full p-1.5'>Detail</button>
            </div>
        </div>
    )
}

export default ProjectCardMobile