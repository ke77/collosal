import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const MainLayout = () => {
    return (
        <section className='main-layout relative h-vh text-white font-sans'>

            
            <Navbar />
            <Outlet /> 
            <Footer />
        </section>
    )
}

export default MainLayout


