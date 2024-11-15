import React from 'react'
import github from '/images/company_logos/github.svg'
import forbes from '/images/company_logos/forbes.svg'
import google from '/images/company_logos/google.svg'
import microsoft from '/images/company_logos/microsoft.svg'
import facebook from '/images/company_logos/facebook.svg'


const LogosSection = () => {
    return (
        <section className='max-w-5xl mx-auto mt-14 border-t border-b border-gray-700 py-2'>
            <div className="w-3/4  mx-auto flex justify-between py-2 px-3">
                <img src={github} />
                <img src={forbes} />
                <img src={google} />
                <img src={microsoft} />
                <img src={facebook} />
            </div>
        </section>
    )
}

export default LogosSection