import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Pricing />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App