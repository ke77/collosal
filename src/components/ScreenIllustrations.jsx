import React from 'react'
import mobile from '/images/illustrations/screen_illustrations/mobile_layout/mobile.svg'
import desktop from '/images/illustrations/screen_illustrations/desktop_layout/desktop.svg'
import bigRectangle from '/images/illustrations/screen_illustrations/mobile_layout/Big_Rectangle.svg'
import smallRectangle from '/images/illustrations/screen_illustrations/mobile_layout/Small_Rectangle.svg'




// mobile component
const ProjectCardMobile = ({mobileOrder}) => {
    return (
        <div className={`w-[100%] lg:w-1/2 flex flex-col justify-between space-y-10 md:space-y-0 ${mobileOrder}`}>
            <div className="layout h-[72%] flex flex-col items-center justify-between border border-[#FFFFFF1A] bg-[#161629] rounded-md space-y-8 sm:space-y-5 md:space-y-0 pt-8 sm:pt-3 md:py-0">
                <div className="tabs h-[27%] flex flex-col items-center justify-end space-y-2 sm:pt-3"> 
                    <img src={bigRectangle} alt="big rectangle" className='w-[80%]' />
                    <img src={smallRectangle} alt="small rectangle" className='w-[50%]' />
                </div>
                <div className="screen mobile-screen w-[34%] sm:w-[45%]">
                    <img src={mobile} alt="mobile screen" />
                </div>
            </div>

            <div className="details flex flex-col justify-end h-[26%] space-y-6 sm:space-y-5">
                <h2 className='sm:text-base md:text-sm'>The Mobile App Landing Page</h2>

                <h3 className='sm:text-base md:text-sm text-lighterWhite'>A landing page for mobile app</h3>

                <button type="button" className='border border-white w-32 sm:w-36 md:w-28 mx-auto rounded-full p-2 sm:p-1.5'>Detail</button>
            </div>
        </div>
    )
}





// desktop component
const ProjectCardDesktop = ({desktopOrder}) => {
    return (
        <div className={`w-[100%] lg:w-1/2 flex flex-col justify-between space-y-10 md:space-y-0 ${desktopOrder}`}>
            <div className="layout h-[72%] flex flex-col items-center justify-between border border-[#FFFFFF1A] bg-[#161629] rounded-md space-y-8 sm:space-y-6 md:space-y-3 pt-8 sm:pt-3 md:py-0">
                <div className="tabs h-[27%] flex flex-col items-center justify-end space-y-2 sm:pt-3"> 
                    <img src={bigRectangle} alt="big rectangle" className='w-[80%]' />
                    <img src={smallRectangle} alt="small rectangle" className='w-[50%]' />
                </div>
                <div className="screen mobile-screen w-[64%] sm:w-[70%]">
                    <img src={desktop} alt="mobile screen" />
                </div>
            </div>

            <div className="details flex flex-col justify-end h-[26%] space-y-6 sm:space-y-5">
                <h2 className='sm:text-base md:text-sm'>The Desktop App Landing Page</h2>

                <h3 className='sm:text-base md:text-sm text-lighterWhite'>A landing page for desktop app</h3>

                <button type="button" className='border border-white w-32 sm:w-36 md:w-28 mx-auto rounded-full p-2 sm:p-1.5'>Detail</button>
            </div>
        </div>
    )
}






const ScreenIllustrations = () => {
    return (
        <section className='flex flex-col md:flex-row items-center md:items-stretch w-full h-full md:space-x-6 space-y-24 sm:space-y-28 md:space-y-0'>
            <ProjectCardMobile mobileOrder={'order-1'} />
            <ProjectCardDesktop desktopOrder={'order-2'} />
        </section>
    )
}

export default ScreenIllustrations
