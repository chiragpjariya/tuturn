import React from 'react'

function Notification({ text, color, bgColor, classes }) {
    return (
        <>
            <div className={`text-${color} ${bgColor ? `bg-${bgColor}-500` : "bg-red-500"} ${classes}`}>{text}</div>
        </>
    )
}

export default Notification