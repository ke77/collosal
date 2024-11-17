import React from 'react'
import logo from '/images/logo.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { PrimaryButton, SecondaryButton } from './Buttons'
// import { NavLink } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className='border-3 pt-8'>
            <div className='max-w-5xl mx-auto h-10 flex items-center justify-between'>
                <div className="logo">
                    <Link to='./index.html' className='font-dmsans font-bold text-xl hover:text-white'>
                        <img src={logo} className='w-[21px] inline mr-3' /> 
                        <h2 className='inline align-middle'>Collosal.</h2>
                    </Link>
                </div>

                {/* nav links */}
                <div className='hidden sm:flex h-full items-center space-x-10 font-sans text-sm text-lighterWhite'>
                    <Link smooth to="#services" className='hover:text-white hover:transition-all duration-300'>Services</Link>
                    <Link smooth to="#how-we-work" className='hover:text-white hover:transition-all duration-300'>How We Work</Link>
                    <Link smooth to="#project" className='hover:text-white hover:transition-all duration-300'>Projects</Link>
                    <Link smooth to="#about" className='hover:text-white hover:transition-all duration-300'>About</Link>
                </div>

                <div>
                    <SecondaryButton text={'Contact'} additionalStyles={{fontSize: '14px'}} />
                </div>


                {/* hamburger section */}
                <div className="sm:hidden">
                    
                </div>


            </div>
        </nav>
    )
}

export default Navbar