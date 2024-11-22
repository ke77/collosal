import React from 'react'
import ellipse1 from '/images/ellipses/Ellipse-1.svg'
import ellipse2 from '/images/ellipses/Ellipse-2.svg'
import ellipse3 from '/images/ellipses/Ellipse-3.svg'



const Ellipse1 = () => {
    return (
        <>
            <img src={ellipse1} alt="peach ellipse" />
        </>
    )
}


const Ellipse2 = () => {
    return (
        <>
            <img src={ellipse2} alt="green ellipse" />
        </>
    )
}


const Ellipse3 = () => {
    return (
        <>
            <img src={ellipse3} alt="indigo ellipse" />
        </>
    )
}


export { Ellipse1, Ellipse2, Ellipse3 }