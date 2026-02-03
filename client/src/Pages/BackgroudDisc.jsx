import React from 'react'

const BackgroudDisc = ({ height = '200px', width = '200px', top = 'auto', left = 'auto', right = 'auto', bottom = 'auto' }) => {
    return (
        <div className={`absolute -z-50 aspect-square rounded-full bg-blue-500/40 blur-3xl transition-all duration-3000ms ease`} style={{ height: height, width: width, top: top, left: left, right: right, bottom: bottom }}></div>
    )
}

export default BackgroudDisc