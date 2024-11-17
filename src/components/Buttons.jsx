import React from 'react'


const PrimaryButton = ({text, additionalStyles={}}) => {
    return (
        <button type="button" className={`w-[185px] h-[48px] bg-primary rounded-[3px] text-sm hover:bg-[#520de6] hover:transition-all duration-300`} style={{ ...additionalStyles }}>{text}</button>
    )
}



const SecondaryButton = ({text, additionalStyles={}}) => {
    return (
        <button type="button" className={`py-2.5 px-8 backdrop-blur-md rounded-[3px] text-sm bg-[#FFFFFF1A] hover:bg-[#FFFFFF2A] hover:transition-all duration-300`} style={{...additionalStyles}}>{text}</button>
    )
}

export { PrimaryButton, SecondaryButton }