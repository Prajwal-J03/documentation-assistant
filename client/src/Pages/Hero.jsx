import React from 'react'
import Backgroud from './BackgroudDisc'
import HeroImg from '../assets/Hero2.png'

const Hero = () => {
    return (
        <div className='container mx-auto p-12 flex items-center justify-center relative '>
            <Backgroud height='80px' left='40px' top='10px' />
            <div>
                <img src={HeroImg} alt="Hero Image" className='h-180 rounded-2xl' />
            </div>
            <Backgroud height='300px' right='200px' bottom='30px' />
        </div>
    )
}

export default Hero