import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '/images/footer_logo.svg'

const Footer = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-y-10 max-w-5xl sm:w-[95%] md:h-[16em] mx-auto mt-32 sm:mt-24 space-y-16 sm:space-y-0 md:space-x-4 pb-20 sm:pb-16'>
            <div className="brand_copyright">
                <div>
                    <img src={footerLogo} alt="logo" className='inline-block' />
                    <h1 className='inline-block align-middle ml-3 font-dmsans font-bold text-2xl md:text-xl'>Collosal.</h1>

                    <p className='text-lighterWhite md:text-sm mt-5'>Copyright &copy; 2021</p>
                    <p className='text-lighterWhite md:text-sm mt-1'>Design By Collosal LLC</p>
                </div>
            </div>

            <div className="space-y-5">
                <h2 className='text-lg md:text-sm'>SERVICES</h2>
                <div className='flex flex-col space-y-3 sm:space-y-2'>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Web Development</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>App Development</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Ui Design</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Consultation</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Maintenance</Link>
                </div>
            </div>

            <div className="space-y-5">
                <h2 className='text-lg md:text-sm'>COMPANY</h2>
                <div className='flex flex-col space-y-3 sm:space-y-2'>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>About</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Contact</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Send Quote</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Privacy Policy</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Terms of Service</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Jobs</Link>
                </div>
            </div>

            <div className="space-y-5">
                <h2 className='text-lg md:text-sm'>RESOURCES</h2>
                <div className='flex flex-col space-y-3 sm:space-y-2'>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Support</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Documentation</Link>
                    <Link to='' className='text-lighterWhite ,md:text-sm hover:text-white hover:transition-all duration-300'>License</Link>
                    <Link to='' className='text-lighterWhite md:text-sm hover:text-white hover:transition-all duration-300'>Sitemap</Link>
                </div>
            </div>
        </section>
    )
}

export default Footer