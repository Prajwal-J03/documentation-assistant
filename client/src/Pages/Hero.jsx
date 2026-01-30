import React from 'react'
import Backgroud from './BackgroudDisc'

const Hero = () => {
    return (
        <div className='container mx-auto p-20 flex items-center justify-around relative '>
            <Backgroud height='80px' left='40px' top='10px'/>
            <div className='bg-amber-200'>
                <img src="#" alt="#" />
            </div>
            <div>
                <h2 className='text-4xl font-bold mb-8'>Welcome to AI Legatrix!</h2>
                <p>We would like you to introduce our AI Based Legal documentation assistance.</p>
                <p>AI Legatrix is a one platform solution for all you legal related query, document summarizer, document generator etc.</p>
            </div>
            <Backgroud height='300px' right='200px' bottom='30px' />
        </div>
    )
}

export default Hero