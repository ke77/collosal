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


{/* <div className='absolute inset-0 bg-gradient-to-r from-black to-black opacity-70 border'> </div>*/}