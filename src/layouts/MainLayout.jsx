import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const MainLayout = () => {
    return (
        <section className='border border-red-600'>
            <Navbar />
            <Outlet /> 
            <Footer />
        </section>
    )
}

export default MainLayout