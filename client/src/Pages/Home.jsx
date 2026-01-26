import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from './AboutUs'
import Pricing from './Pricing'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Pricing />
            <AboutUs />
            <Footer />
        </>
    )
}

export default Home