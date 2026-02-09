import React, { useContext, useState } from 'react'
import IconDark from '../assets/icon_dark.png'
import IconLight from '../assets/icon_light.png'
import LightTheme from '../assets/lightTheme.svg'
import DarkTheme from '../assets/darkTheme.svg'
import ThemeContext from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const Chatbot = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const iconType = theme === 'dark' ? IconDark : IconLight

    return (
        <div className="w-full h-screen flex items-stretch relative">
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-997 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
            <div className="absolute top-0 w-full lg:hidden flex items-center justify-between px-4 border-b border-gray-400 z-998">
                <Link to="/" className="flex items-center gap-2 my-4">
                    <img src={iconType} alt="Logo" className="w-8" />
                    <h1 className="text-2xl font-bold">AI Legatrix</h1>
                </Link>
                <button
                    id="menu-button"
                    aria-label="Open Menu"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                        <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.25" d="M1.71 5.63h20.58"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.25" d="M1.71 12h20.58"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.25" d="M1.71 18.37h20.58"></path>
                    </svg>
                </button>
            </div>
            <div
                className={`
                    fixed lg:static top-0 left-0 h-full w-75
                    bg-white dark:bg-black
                    border-r-2 border-gray-400 dark:border-gray-300
                    transform transition-transform duration-300
                    z-999
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0
                    flex flex-col
                `}
            >
                <Link to="/" className="flex items-center gap-2 my-4 px-4">
                    <img src={iconType} alt="Logo" className="w-8" />
                    <h1 className="text-2xl font-bold">AI Legatrix</h1>
                    <button
                        className="ml-auto lg:hidden"
                        aria-label="Close Sidebar"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ✕
                    </button>
                </Link>
                <input
                    type="text"
                    name="searchChat"
                    id="searchChat"
                    placeholder="Search..."
                    className="block w-60 h-10 border-2 border-gray-400 dark:border-gray-300 mx-auto rounded-full my-8 p-2 focus:outline-0 focus:border-gray-500"
                />
                <div className="flex-1 px-4 overflow-y-auto">
                    <h5 className="font-semibold pb-4">Your Chats</h5>
                </div>
                <div className="py-4 flex justify-center border-t border-gray-400 dark:border-gray-300">
                    <img
                        src={theme === 'light' ? DarkTheme : LightTheme}
                        alt="Toggle Theme"
                        onClick={toggleTheme}
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <div className="relative flex-1 h-screen pt-16 lg:pt-0">
                <div className="absolute bottom-0 w-full py-8">
                    <div className="mx-auto px-6 py-2 w-9/10 lg:w-3/4 h-14 flex items-center justify-between gap-4 border-2 border-gray-400 dark:border-gray-300 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16" width="16" className="cursor-pointer">
                            <path d="M9.206 1.366c0-.667-.539-1.206-1.206-1.206s-1.206.539-1.206 1.206v5.428H1.366C.699 6.794.16 7.333.16 8s.539 1.206 1.206 1.206h5.428v5.428c0 .667.539 1.206 1.206 1.206s1.206-.539 1.206-1.206V9.206h5.428c.667 0 1.206-.539 1.206-1.206s-.539-1.206-1.206-1.206H9.206V1.366Z" fill="currentColor"></path>
                        </svg>
                        <input
                            type="text"
                            name="chatInput"
                            id="chatInput"
                            className="block flex-1 h-12 px-2 mx-auto focus:outline-0"
                        />
                        <svg viewBox="0 0 24 24" fill="none" height="24" width="24" className="cursor-pointer">
                            <path d="M12 1.248v21.504" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                            <path d="M6.624 7.968v8.064" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                            <path d="M22.752 9.312v5.376" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                            <path d="M1.248 9.312v5.376" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                            <path d="M17.376 5.28v13.44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbot
