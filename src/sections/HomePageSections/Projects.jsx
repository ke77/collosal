import React from 'react'
import ScreenIllustrations from '../../components/ScreenIllustrations'

const Projects = () => {
    return (
        <section className='flex flex-col justify-between max-w-5xl mx-auto mt-24 text-center space-y-12 px-8 pt-24 h-[800px] border-t border-t-[#FFFFFF2A]'>
            <div className="text h-[25%] space-y-2">
                <h2 className='text-badgeGreen text-sm'>PROJECTS</h2>

                <h1 className='font-bold text-3xl leading-snug max-w-lg mx-auto'>We have completed many amazing projects that you will not believe</h1>
            </div>

            <div className="illustrations h-[75%]">
                <ScreenIllustrations />
            </div>
        </section>        
    )
}

export default Projects