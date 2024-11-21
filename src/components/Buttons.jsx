import React from 'react'


const PrimaryButton = ({text, additionalStyles={}}) => {
    return (
        <button type="button" className={`primary-button bg-primary rounded-[3px] text-sm hover:bg-[#520de6] hover:transition-all duration-300 shadow-xl ${additionalStyles}`}>{text}</button>
    )
}



const SecondaryButton = ({text, additionalStyles={}}) => {
    return (
        <button type="button" className={`secondary-button py-2.5 px-8 backdrop-blur-md rounded-[3px] text-sm bg-[#FFFFFF1A] hover:bg-[#FFFFFF2A] hover:transition-all duration-300 shadow-xl ${additionalStyles}`}>{text}</button>
    )
}

export { PrimaryButton, SecondaryButton }