import React from 'react'
import NotFoundImg from '../assets/not-found.png'
import BackgroudDisc from '../components/BackgroudDisc'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='container mx-auto h-screen flex items-center justify-center relative'>
            <BackgroudDisc top='100px' left='50px' />
            <div className='w-96 lg:w-200 flex flex-col items-center justify-around gap-10'>
                <h2 className='text-4xl text-center font-bold text-blue-500'>404 Not Found</h2>
                <img src={NotFoundImg} alt="Email Verification" className='mx-auto' height='400px' width='400px'/>
                <p className='text-justify'>Sorry, the page which your are looking is not available. Please </p>
                <Link to='/' className='cursor-pointer bg-blue-500 px-8 py-2 rounded-full'>Go to Home Page</Link>
            </div>
        </div>
    )
}

export default NotFound