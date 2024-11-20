import React from 'react'
import ScreenIllustrations from '../../components/ScreenIllustrations'


const Projects = () => {
    return (
        <section id='projects' className='flex flex-col justify-between sm:items-center md:items-stretch max-w-5xl w-[90%] sm:w-[80%] sm:w-5xl mx-auto mt-24 text-center space-y-20 md:space-y-12 px-8 pt-24 sm:pt-28 md:pt-24 md:h-[800px] border-t border-t-[#FFFFFF2A]'>
            <div className="text h-[25%] space-y-4 sm:space-y-2">
                <h2 className='text-badgeGreen text-sm'>PROJECTS</h2>

                <h1 className='font-bold text-3xl leading-normal sm:leading-snug max-w-lg mx-auto'>We have completed many amazing projects that you will not believe</h1>
            </div>

            <div className="illustrations mx-auto w-[85%] h-[75%]">
                <ScreenIllustrations />
            </div>
        </section>        
    )
}

export default Projects