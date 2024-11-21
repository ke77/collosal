import React, { useState } from 'react'
import logo from '/images/logo.svg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { SecondaryButton } from './Buttons'
import { FaHamburger }  from 'react-icons/fa'



const Navbar = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
;

    return (
        <nav className='pt-8'>
            <div className='w-[84%] md:w-[90%] md:max-w-4xl lg:max-w-5xl mx-auto h-10 flex items-center justify-between z-1000'>
                <div className="logo">
                    <HashLink smooth to='./index.html' className='font-dmsans font-bold text-2xl sm:text-xl hover:text-white'>
                        <img src={logo} className='w-[21px] inline mr-3' /> 
                        <h2 className='inline align-middle'>Collosal.</h2>
                    </HashLink>
                </div>

                {/* nav links */}
                <div className='hidden md:flex h-full items-center space-x-10 font-sans text-sm'>
                    <HashLink smooth to="#services" className='text-lighterWhite hover:text-white hover:transition-all duration-300'>Services</HashLink>
                    <HashLink smooth to="#how-we-work" className='text-lighterWhite hover:text-white hover:transition-all duration-300'>How We Work</HashLink>
                    <HashLink smooth to="#projects" className='text-lighterWhite hover:text-white hover:transition-all duration-300'>Projects</HashLink>
                    <HashLink smooth to="#about" className='text-lighterWhite hover:text-white hover:transition-all duration-300'>About</HashLink>
                </div>

                <div className='hidden md:block'>
                    <SecondaryButton text={'Contact'} additionalStyles={{fontSize: '14px'}} />
                </div>


                {/* hamburger section */}
                <div className="md:hidden">
                    <button type="button" onClick={() => setNavMenuOpen((prevState) => !prevState)}>
                        <FaHamburger size={25} />
                    </button>

                </div>

                {/* nav menu for mobile */}
                <div className={`${navMenuOpen === true ? 'sm:flex' : 'hidden'} md:hidden absolute sm:flex-col w-[90%] h-[80vw] left-6 top-20 z-1000 space-y-3 bg-[#0a0a0af3] backdrop-blur-md border border-[#FFFFFF1A] shadow rounded-lg`}>
                    <div className='w-[70%] h-[75%] flex flex-col justify-center space-y-8 mx-auto font-sans text-sm sm:text-lighterWhite'>
                        <HashLink smooth to="#services" className='text-base hover:text-lighterWhite hover:transition-all duration-300'>Services</HashLink>
                        <HashLink smooth to="#how-we-work" className='text-base hover:text-white hover:transition-all duration-300'>How We Work</HashLink>
                        <HashLink smooth to="#projects" className='text-base hover:text-white hover:transition-all duration-300'>Projects</HashLink>
                        <HashLink smooth to="#about" className='text-base hover:text-white hover:transition-all duration-300'>About</HashLink>
                    </div>

                    <div className=''>
                        <SecondaryButton text={'Contact'} additionalStyles={{fontSize: '14px', width: '70%', padding: '14px 0'}} />
                    </div>  
                </div>
            </div>
        </nav>
    )
}

export default Navbar