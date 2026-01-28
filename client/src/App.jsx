import React, { useEffect } from 'react'
import SignUp from './pages/Signup'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import AboutUs from './pages/AboutUs'

const App = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App