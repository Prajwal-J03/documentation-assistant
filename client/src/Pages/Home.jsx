import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from './AboutUs'
import Pricing from './Pricing'
import Footer from '../components/Footer'
import Hero from './Hero'
import Backgroud from './BackgroudDisc'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Pricing />
            <AboutUs />
            <Footer />
        </>
    )
}

export default Home