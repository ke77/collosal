import React from 'react'


const PrimaryButton = ({text, additionalStyles={}}) => {
    return (
        <button type="button" className={`w-[185px] h-[48px] bg-primary rounded-[3px] text-sm`} style={{ ...additionalStyles }}>{text}</button>
    )
}



const SecondaryButton = ({text, additionalStyles={}}) => {
    return (
        <button type="button" className={`py-2.5 px-8 backdrop-blur-md rounded-[3px] text-sm bg-[#FFFFFF1A]`} style={{...additionalStyles}}>{text}</button>
    )
}

export { PrimaryButton, SecondaryButton }