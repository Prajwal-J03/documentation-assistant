import React from 'react'
import LightTheme from '../assets/lightTheme.svg'

const Navbar = () => {
    return (
        <>
            <div className='container mx-auto p-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>AI Legatrix</h1>
                <div className='flex items-center justify-between gap-20 px-8 py-3 border border-white rounded-full shadow-md shadow-gray-50/50'>
                    <a href="#" className='px-4 py-1 rounded-full bg-blue-500'>Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                </div>
                <div className='flex items-center gap-8'>
                    <img src={LightTheme} alt="Toggle Theme" />
                    <button className='bg-blue-500 px-8 py-2 rounded-md hover:shadow-md shadow-gray-50/50 active:translate-y-1'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar