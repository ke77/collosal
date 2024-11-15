import React from 'react'
import logo from '../../public/images/logo.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { PrimaryButton, SecondaryButton } from './Buttons'
// import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const buttonStyling = {
        fontSize: '14px'
    }


    return (
        <nav className='border-3 pt-10'>
            <div className='max-w-5xl mx-auto h-10 flex items-center justify-between'>
                <div className="logo">
                    <Link className='font-dmsans font-bold text-xl'>
                        <img src={logo} className='w-[23px] inline' /> Collosal.
                    </Link>
                </div>

                {/* nav links */}
                <div className='hidden sm:flex h-full items-center space-x-10 font-sans text-sm text-lighterWhite'>
                    <Link smooth to="#services">Services</Link>
                    <Link smooth to="#how-we-work">How We Work</Link>
                    <Link smooth to="#project">Project</Link>
                    <Link smooth to="#about">About</Link>
                </div>

                <div>
                    <SecondaryButton text={'Contact'} additionalStyles={buttonStyling} />
                </div>


                {/* hamburher section */}
                <div className="sm:hidden">
                    
                </div>


            </div>
        </nav>
    )
}

export default Navbar