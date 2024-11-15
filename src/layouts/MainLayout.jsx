import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const MainLayout = () => {
    return (
        <section className='w-screen bg-gray-700 text-white'>
            <Navbar />
            <Outlet /> 
            <Footer />
        </section>
    )
}

export default MainLayout