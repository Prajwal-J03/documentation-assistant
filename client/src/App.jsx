import React, { useEffect } from 'react'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import EmailVerification from './pages/EmailVerification'

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
        <Route path='/email-verification' element={<EmailVerification />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App