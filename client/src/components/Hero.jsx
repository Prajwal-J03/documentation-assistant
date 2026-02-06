import React from 'react'
import BackgroudDisc from './BackgroudDisc'
import HeroImg4 from '../assets/Hero4.png'

const Hero = () => {
    return (
        <div className='container mx-auto p-12 flex items-center justify-center relative '>
            <BackgroudDisc height='80px' left='40px' top='10px' />
            <div>
                <img src={HeroImg4} alt="Hero Image" className='h-180 rounded-2xl' />
            </div>
            <BackgroudDisc height='300px' right='100px' bottom='30px' />
        </div>
    )
}

export default Hero