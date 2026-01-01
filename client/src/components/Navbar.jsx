import React, { useEffect, useState } from 'react'
import LightTheme from '../assets/lightTheme.svg'
import DarkTheme from '../assets/darkTheme.svg'
import Logo from '../assets/icon.png'
import Menu from '../assets/menu.svg'
import MenuLight from '../assets/menuLight.svg'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [menuOpen, setMenuOpen] = useState(false)

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

    const handleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <>
            <div className='container mx-auto p-6 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="AI Legatrix" className='w-8' />
                    <h1 className='text-2xl font-bold'>AI Legatrix</h1>
                </div>
                <div className='hidden md:flex items-center justify-between gap-20 px-8 py-3 border dark:border-white rounded-full shadow-md shadow-gray-500/50 dark:shadow-gray-50/50'>
                    <a href="#" className='px-4 py-1 rounded-full bg-blue-500'>Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                </div>
                <div className='hidden md:flex items-center gap-8'>
                    <img src={theme === 'light' ? DarkTheme : LightTheme} alt="Toggle Theme" onClick={handleTheme} className='cursor-pointer' />
                    <button className='bg-blue-500 px-8 py-2 rounded-md hover:shadow-md shadow-gray-500/50 dark:shadow-gray-50/50 active:translate-y-1'>Login</button>
                </div>
                <div className='flex md:hidden rounded-md relative'>
                    <button onClick={handleMenu} aria-label='Open Menu'>
                        <img src={theme === 'dark' ? MenuLight : Menu} alt="Menu" />
                    </button>
                    {menuOpen && <div className='w-72 absolute border dark:border-white shadow-gray-500/50 dark:shadow-gray-50/50 top-12 right-0 shadow-lg rounded-md p-4 flex flex-col items-start gap-4'>
                        <img src={theme === 'light' ? DarkTheme : LightTheme} alt="Toggle Theme" onClick={handleTheme} className='cursor-pointer mb-4' />
                        <a href="#" className='px-4 py-1 rounded-full bg-blue-500' onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>About Us</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Pricing</a>
                        <div className='w-full flex justify-center mb-4'>
                            <button className='bg-blue-500 px-8 py-2 rounded-md mt-8 hover:shadow-md shadow-gray-500/50 dark:shadow-gray-50/50 active:translate-y-1'>Login</button>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Navbar