import React from 'react'

const Pricing = () => {
    return (
        <div className='container mx-auto mb-20'>
            <h1 className='text-xl font-bold text-center mb-8'>Pricing</h1>
            <div className='flex items-start justify-between'>
                <div className='border rounded-2xl py-4 px-12 w-104 hover:shadow-md'>
                    <h4 className='text-lg font-bold text-center mb-4'>Free</h4>
                    <ul className='list-disc'>
                        <li>Summarize PDFs upto 5 pages/day.</li>
                        <li>Max file size 20 MB.</li>
                        <li>Standard AI model.</li>
                    </ul>
                </div>
                <div className='border rounded-2xl py-4 px-12 w-104 hover:shadow-md relative'>
                    <h4 className='text-lg font-bold text-center mb-4'>Basic <span className='bg-blue-500 text-base font-medium px-2 py-1 rounded-b-md absolute -top-1 right-5 shadow-md shadow-gray-400 text-white '>Most Popular</span></h4>
                    <ul className='list-disc'>
                        <li>Summarize PDFs upto 500 pages/day.</li>
                        <li>Max file size upto 1 GB.</li>
                    </ul>
                </div>
                <div className='border rounded-2xl py-4 px-12 w-104 hover:shadow-md'>
                    <h4 className='text-lg font-bold text-center mb-4'>Professional</h4>
                    <ul className='list-disc'>
                        <li>Summarize PDFs upto 50,000 pages/day.</li>
                        <li>Max file size upto 25 GB.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing