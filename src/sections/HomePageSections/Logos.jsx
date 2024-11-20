import React from 'react'
import github from '/images/company_logos/github.svg'
import forbes from '/images/company_logos/forbes.svg'
import google from '/images/company_logos/google.svg'
import microsoft from '/images/company_logos/microsoft.svg'
import facebook from '/images/company_logos/facebook.svg'


const LogosSection = () => {
    return (
        <section className='sm:w-[95%] md:max-w-5xl mx-auto mt-32 md:mt-20 border-t border-b border-[#FFFFFF2A] py-20 sm:py-12 md:py-4'>
            <div className="w-[35%] sm:w-[100%] md:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 sm:gap-8 md:gap-x-12 place-items-center py-2 px-3 lg:px-0">
                <img src={github} alt='github logo' />
                <img src={forbes} alt='forbes logo' />
                <img src={google} alt='google logo' />
                <img src={microsoft} alt='microsoft logo' />
                <img src={facebook} alt='facebook logo' />
            </div>
        </section>
    )
}

export default LogosSection