import React from 'react'
import ProjectCardMobile from './ProjectCardMobile'
import ProjectCardDesktop from './ProjectCardDesktop'


const ScreenIllustrations = () => {
    return (
        <section className='flex w-full h-full space-x-6'>
            <ProjectCardMobile mobileOrder={'order-1'} />
            <ProjectCardDesktop desktopOrder={'order-2'} />
        </section>
    )
}

export default ScreenIllustrations