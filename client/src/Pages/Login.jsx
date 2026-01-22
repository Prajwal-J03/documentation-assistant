import React from 'react'

const Login = () => {
    return (
        <div className='mx-auto bg-gray-100 w-full h-screen flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-2xl p-8 flex flex-col'>
                <h2 className=' text-blue-400 text-xl text-center font-bold mb-8'>Login</h2>
                <form className='flex flex-col items-start justify-between gap-4'>
                    <label htmlFor="email" className='font-semibold'>Email: </label>
                    <input type="email" name='email' id='email' className='border rounded-lg w-80 p-2'/>
                    <label htmlFor="password" className='font-semibold'>Password: </label>
                    <input type="password" name='password' id='password' className='border rounded-lg w-80 p-2'/>
                    <button className='bg-blue-500 text-white py-2 w-full mt-4 rounded-full hover:shadow-lg'>Submit</button>
                    <hr color='bg-gray-400' className='border-t border-gray-300 shadow-lg w-9/12 mx-auto mt-4'/>
                    <p className='mx-auto text-gray-400'>Already have an account? Please <span className='text-blue-500 cursor-pointer hover:underline'>Sign Up</span></p>
                </form>
            </div>
        </div>
    )
}

export default Login