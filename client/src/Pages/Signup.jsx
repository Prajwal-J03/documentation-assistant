import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icon.png'


const SignUp = () => {
    return (
        <div className='mx-auto bg-gray-100 w-full h-screen flex items-center justify-center relative'>
            <div className='absolute top-0 container bg-white w-full px-8 py-4 flex items-center justify-between'>
                <Link to='/'>
                    <div className='flex items-center gap-2'>
                        <img src={Logo} alt="AI Legatrix" className='w-8' />
                        <h1 className='text-2xl font-bold'>AI Legatrix</h1>
                    </div>
                </Link>
                <div className=' lg:block'>
                    <a href='/'>Home</a>
                </div>
            </div>
            <div className='bg-white shadow-lg rounded-2xl p-8 flex flex-col'>
                <h2 className=' text-blue-400 text-xl text-center font-bold mb-8'>Sign Up</h2>
                <form className='flex flex-col items-start justify-between gap-4'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' id='name' className='border rounded-lg w-80 p-2' />
                    <label htmlFor="email" className='font-semibold'>Email: </label>
                    <input type="email" name='email' id='email' className='border rounded-lg w-80 p-2' />
                    <label htmlFor="password" className='font-semibold'>Password: </label>
                    <input type="password" name='password' id='password' className='border rounded-lg w-80 p-2' />
                    <button className='bg-blue-500 text-white py-2 w-full mt-4 rounded-full hover:shadow-lg'>Submit</button>
                    <hr className='border-t border-gray-300 w-9/12 mx-auto mt-4' />
                    <p className='mx-auto text-gray-400'>Already have an account? Please <Link to='/login' className='text-blue-500 cursor-pointer hover:underline'>Login</Link></p>
                </form>
            </div>
        </div >
    )
}

export default SignUp