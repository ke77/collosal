import React from 'react'
import ScreenIllustrations from '../../components/ScreenIllustrations'
import { Ellipse1, Ellipse2, Ellipse3 } from '../../components/Ellipses'



const Projects = () => {
    return (
        <section id='projects' className='relative flex flex-col justify-between sm:items-center md:items-stretch max-w-5xl w-[95%] sm:w-[80%] sm:w-5xl mx-auto mt-24 text-center space-y-20 md:space-y-12 px-8 pt-24 sm:pt-28 md:pt-24 md:h-[800px] border-t border-t-[#FFFFFF2A]'>
            <div className='ellipse-1 z-[-100] absolute top-40 md:top-36 left-0 md:left-36'>
                <Ellipse1 />
            </div>

            <div className='ellipse-2 z-[-100] absolute top-1 md:top-4 left-[80%] md:left-[73%]'>
                <Ellipse2 />
            </div>

            <div className='ellipse-3 z-[-100] absolute top-64 md:top-48 left-[88%] md:left-[88.8%]'>
                <Ellipse3 />
            </div>

            <div className="text h-[25%] space-y-3">
                <h2 className='text-badgeGreen text-sm'>PROJECTS</h2>

                <h1 className='font-bold text-3xl leading-normal sm:leading-snug max-w-lg lg:max-w-md mx-auto'>We have completed many amazing projects that you will not believe</h1>
            </div>

            <div className="illustrations mx-auto w-[95%] sm:w-[85%] h-[75%]">
                <ScreenIllustrations />
            </div>
        </section>        
    )
}

export default Projects