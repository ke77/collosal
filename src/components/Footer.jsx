import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '/images/footer_logo.svg'

const Footer = () => {
    return (
        <section className='flex flex-col justify-between sm:flex-row max-w-5xl h-[16em] mx-auto mt-24 space-x-4'>
            <div className="brand_copright w-1/4">
                <div>
                    <img src={footerLogo} alt="logo" className='inline-block' />
                    <h1 className='inline-block align-middle ml-3 font-dmsans font-bold text-xl'>Collosal.</h1>

                    <p className='text-lighterWhite text-sm mt-5'>Copyright &copy; 2021</p>
                    <p className='text-lighterWhite text-sm mt-1'>Design By Collosal LLC</p>
                </div>
            </div>

            <div className="w-1/4 space-y-5">
                <h2 className='text-sm'>SERVICES</h2>
                <div className='flex flex-col space-y-3'>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Web Development</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>App Development</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Ui Design</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Consultation</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Maintenance</Link>
                </div>
            </div>

            <div className="w-1/4 space-y-5">
                <h2 className='text-sm'>COMPANY</h2>
                <div className='flex flex-col space-y-2'>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>About</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Contact</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Send Quote</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Privacy Policy</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Terms of Service</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Jobs</Link>
                </div>
            </div>

            <div className="w-1/4 space-y-5">
                <h2 className='text-sm'>RESOURCES</h2>
                <div className='flex flex-col spaace-y-2'>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Support</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Documentation</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>License</Link>
                    <Link to='' className='text-lighterWhite text-sm hover:text-white hover:transition-all duration-300'>Sitemap</Link>
                </div>
            </div>
        </section>
    )
}

export default Footer