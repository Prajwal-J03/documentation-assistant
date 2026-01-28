import React, { useEffect, useRef, useState } from 'react'
import LightTheme from '../assets/lightTheme.svg'
import DarkTheme from '../assets/darkTheme.svg'
import Logo from '../assets/icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        }

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuOpen])

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
                    <Link to='/'>
                        <h1 className='text-2xl font-bold'>AI Legatrix</h1>
                    </Link>
                </div>
                <div className='hidden lg:flex items-center justify-between gap-20 px-8 py-3 border dark:border-white rounded-full shadow-md shadow-gray-500/50 dark:shadow-gray-50/50'>
                    <Link to='/' className='px-4 py-1 rounded-full bg-blue-500 text-white font-semibold'>
                        Home
                    </Link>
                    <a href="#">Pricing</a>
                    <a href="#">About Us</a>
                </div>
                <div className='hidden lg:flex items-center gap-8'>
                    <img src={theme === 'light' ? DarkTheme : LightTheme} alt="Toggle Theme" onClick={handleTheme} className='cursor-pointer' />
                    <button className='bg-blue-500 px-8 py-2 rounded-md hover:shadow-md shadow-gray-500/50 dark:shadow-gray-50/50 active:translate-y-1'>Login</button>
                </div>
                <div className='flex lg:hidden rounded-md relative'>
                    <button onClick={handleMenu} aria-label='Open Menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Menu--Streamline-Ionic-Filled" height="24" width="24">
                            <desc>
                                Menu Streamline Icon: https://streamlinehq.com
                            </desc>
                            <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.25" d="M1.71 5.62975h20.58"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.25" d="M1.71 12.00015h20.58"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.25" d="M1.71 18.37025h20.58"></path>
                        </svg>
                    </button>
                    {menuOpen &&
                        <div
                            ref={menuRef}
                            className='w-72 absolute bg-white dark:bg-gray-950 border dark:border-white shadow-gray-500/50 dark:shadow-gray-50/50 top-12 right-0 shadow-lg rounded-md p-4 flex flex-col items-start gap-4 z-[999]'>
                            <img src={theme === 'light' ? DarkTheme : LightTheme} alt="Toggle Theme" onClick={handleTheme} className='cursor-pointer mb-4' />
                            <a href="#" className='px-4 py-1 rounded-full bg-blue-500' onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>Pricing</a>
                            <a href="#" onClick={() => setMenuOpen(false)}>About Us</a>
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