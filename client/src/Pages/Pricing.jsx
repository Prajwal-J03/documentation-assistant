import React from 'react'

const Pricing = () => {
    return (
        <div className='container mx-auto mb-20' id='pricing'>
            <h1 className='text-xl font-bold text-center mb-8'>Pricing</h1>
            <div className='w-full mx-auto flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0 mb-16'>
                <div className='border rounded-2xl py-4 px-12 w-84 lg:w-104 hover:shadow-md'>
                    <h4 className='text-lg font-bold text-center mb-4'>Free</h4>
                    <ul className='list-disc'>
                        <li>Summarize PDFs upto 5 pages/day.</li>
                        <li>Max file size 20 MB.</li>
                        <li>Standard AI model.</li>
                        <li>Voice Support.</li>
                    </ul>
                    <button className='bg-blue-500 text-white font-medium w-1/2 block mx-auto mt-8 mb-4 rounded-full py-2 cursor-pointer'>Login Now</button>
                </div>
                <div className='border rounded-2xl py-4 px-12 w-84 lg:w-104 hover:shadow-md relative'>
                    <h4 className='text-lg font-bold text-center mb-4'>Basic <span className='bg-blue-500 text-base font-medium px-2 py-1 rounded-b-md absolute -top-1 right-5 shadow-md shadow-gray-400 text-white '>Most Popular</span></h4>
                    <ul className='list-disc'>
                        <li>Summarize PDFs upto 500 pages/day.</li>
                        <li>Max file size upto 1 GB.</li>
                        <li>Access out Legatrix Max AI model.</li>
                        <li>Voice support + AI conversation.</li>
                        <li>Add multiple users (max 2).</li>
                    </ul>
                    <button className='bg-blue-500 text-white font-medium w-1/2 block mx-auto mt-8 mb-4 rounded-full py-2 cursor-pointer'>Login Now</button>
                </div>
                <div className='border rounded-2xl py-4 px-12 w-84 lg:w-104 hover:shadow-md'>
                    <h4 className='text-lg font-bold text-center mb-4'>Professional</h4>
                    <ul className='list-disc'>
                        <li>Summarize PDFs upto 50,000 pages/day.</li>
                        <li>Max file size upto 25 GB.</li>
                        <li>Access out Legatrix Max AI model.</li>
                        <li>Voice support + AI conversation.</li>
                        <li>Add multiple users(max 15).</li>
                    </ul>
                    <button className='bg-blue-500 text-white font-medium w-1/2 block mx-auto mt-8 mb-4 rounded-full py-2 cursor-pointer'>Login Now</button>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-8 text-center lg:text-start'>Not the plan your looking for?</h1>
                <div className='w-92 lg:w-full mx-auto border rounded-2xl flex flex-col items-center justify-between py-16 mb-8'>
                    <h4 className='text-lg font-bold mb-8'>Contact Support Team</h4>
                    <p className='w-80 lg:w-120 mb-2'><span className='text-xl text-red-600'>* </span>Name: </p>
                    <input type="text" name="name" id="name" className='border border-gray-400 h-12 w-80 lg:w-120 rounded-lg px-4 mb-4' required />
                    <p className='w-80 lg:w-120 mb-2'><span className='text-xl text-red-600'>* </span>Email: </p>
                    <input type="email" name="email" id="email" className='border border-gray-400 h-12 w-80 lg:w-120 rounded-lg px-4 mb-4' required />
                    <p className='w-80 lg:w-120 mb-2'><span className='text-xl text-red-600'>* </span>Detailed Query: </p>
                    <textarea name="query" id="query" rows='8' className='border border-gray-400 w-80 lg:w-120 rounded-lg px-4 py-2 mb-4'></textarea>
                    <p className='w-80 lg:w-118 mt-8'>Or else you can contact us from below email id or mobile number:</p>
                    <p className='w-80 lg:w-118 mt-4'>Email id: <b>contactus@ailegatrix</b></p>
                    <p className='w-80 lg:w-118 mt-4'>Contact number: <b>+91 1234567890</b></p>
                </div>
            </div>
        </div>
    )
}

export default Pricing