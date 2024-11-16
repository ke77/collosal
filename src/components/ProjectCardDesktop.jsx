import React from 'react'
import desktop from '/images/illustrations/screen_illustrations/desktop_layout/desktop.svg'
import bigRectangle from '/images/illustrations/screen_illustrations/mobile_layout/Big_Rectangle.svg'
import smallRectangle from '/images/illustrations/screen_illustrations/mobile_layout/Small_Rectangle.svg'


const ProjectCardDesktop = ({desktopOrder}) => {
    return (
        <div className={`w-1/2 flex flex-col justify-between ${desktopOrder}`}>
            <div className="layout h-[72%] flex flex-col items-center justify-between border border-[#FFFFFF1A] bg-[#161629] rounded-sm">
                <div className="tabs h-[27%] flex flex-col items-center justify-end space-y-2"> 
                    <img src={bigRectangle} alt="big rectangle" className='w-[80%]' />
                    <img src={smallRectangle} alt="small rectangle" className='w-[50%]' />
                </div>
                <div className="screen mobile-screen w-[64%]">
                    <img src={desktop} alt="mobile screen" />
                </div>
            </div>

            <div className="details flex flex-col justify-end h-[26%] space-y-5">
                <h2 className='text-sm'>The Desktop App Landing Page</h2>

                <h3 className='text-sm text-lighterWhite'>A landing page for desktop app</h3>

                <button type="button" className='border border-white w-28 mx-auto rounded-full p-1.5'>Detail</button>
            </div>
        </div>
    )
}

export default ProjectCardDesktop