import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SignUp = () => {
    return (
        <div className='mx-auto bg-gray-100 dark:bg-gray-900 w-full h-screen relative'>
            <Navbar />
            <div className='absolute top-1/2 left-1/2 -translate-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col z-10'>
                <h2 className=' text-blue-400 text-xl text-center font-bold mb-8'>Sign Up</h2>
                <form className='flex flex-col items-start justify-between gap-4'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' id='name' className='border rounded-lg w-80 p-2' />
                    <label htmlFor="email" className='font-semibold'>Email: </label>
                    <input type="email" name='email' id='email' className='border rounded-lg w-80 p-2' />
                    <label htmlFor="password" className='font-semibold'>Password: </label>
                    <input type="password" name='password' id='password' className='border rounded-lg w-80 p-2' />
                    <button className='bg-blue-500 text-white py-3 w-full mt-4 rounded-full hover:shadow-lg'>Submit</button>
                    <hr className='border-t border-gray-300 w-9/12 mx-auto mt-4' />
                    <p className='mx-auto text-gray-400'>Already have an account? Please <Link to='/login' className='text-blue-500 cursor-pointer hover:underline'>Login</Link></p>
                </form>
            </div>
        </div >
    )
}

export default SignUp