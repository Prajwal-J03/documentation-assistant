import React, { useContext } from 'react'
import IconDark from '../assets/icon_dark.png'
import IconLight from '../assets/icon_light.png'
import LightTheme from '../assets/lightTheme.svg'
import DarkTheme from '../assets/darkTheme.svg'
import ThemeContext from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const Chatbot = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const iconType = theme === 'dark' ? IconDark : IconLight

    return (
        <div className='w-full h-screen flex items-center justify-between'>
            <div className='w-75 h-full border-r-2 border-gray-300 flex flex-col relative'>
                <Link to='/' className='flex items-center justify-center gap-2 my-4'>
                    <img src={iconType} alt="Logo" className='w-8' />
                    <h1 className='text-2xl font-bold'>AI Legatrix</h1>
                </Link>
                <input type="text" name="searchChat" id="searchChat" className='block w-60 h-8 border-2 border-gray-300 mx-auto rounded-2xl my-8 p-2 focus:outline-0 focus:border-gray-500' />
                <div className='flex-1 px-4 overflow-y-auto'>
                    <h5 className='font-semibold pb-4'>Your Chats</h5>
                </div>
                <div className='py-4 flex items-center justify-center'>
                    <img src={theme === 'light' ? DarkTheme : LightTheme} alt="Toggle Theme" onClick={toggleTheme} className='cursor-pointer' />
                </div>
            </div>
            <div className='relative w-full h-screen'>
                <div className='absolute bottom-0 w-full py-4'>
                    <input type="text" name='chatInput' id='chatInput' className='block w-3/4 h-12 px-8 mx-auto border-2 border-gray-300 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Chatbot