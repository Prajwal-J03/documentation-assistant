import React, { useEffect, useState } from 'react'
import LightTheme from '../assets/lightTheme.svg'
import DarkTheme from '../assets/darkTheme.svg'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }
    return (
        <>
            <div className='container mx-auto p-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>AI Legatrix</h1>
                <div className='flex items-center justify-between gap-20 px-8 py-3 border dark:border-white rounded-full shadow-md shadow-gray-500/50 dark:shadow-gray-50/50'>
                    <a href="#" className='px-4 py-1 rounded-full bg-blue-500'>Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                </div>
                <div className='flex items-center gap-8'>
                    <img src={theme === 'light' ? DarkTheme : LightTheme} alt="Toggle Theme" onClick={handleTheme} className='cursor-pointer'/>
                    <button className='bg-blue-500 px-8 py-2 rounded-md hover:shadow-md shadow-gray-500/50 dark:shadow-gray-50/50 active:translate-y-1'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar