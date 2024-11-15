import React from 'react'


const PrimaryButton = ({text, additionalStyles}) => {
    return (
        <button type="button" className='w-'>{text}</button>
    )
}



const SecondaryButton = ({text, additionalStyles ={}}) => {
    return (
        <button type="button" className={`py-2.5 px-8 backdrop-blur-sm rounded-[3px] bg-[#FFFFFF1A]`} style={{...additionalStyles}}>{text}</button>
    )
}

export { PrimaryButton, SecondaryButton }