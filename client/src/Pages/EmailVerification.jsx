import React from 'react'
import EmailVerificationImg from '../assets/email-verification.png'
import BackgroudDisc from '../components/BackgroudDisc'

const EmailVerification = () => {
    return (
        <div className='container mx-auto h-screen flex items-center justify-center relative'>
            <BackgroudDisc top='100px' left='50px'/>
            <div className='w-96 lg:w-200 flex flex-col items-center justify-around gap-10'>
                <h2 className='text-4xl text-center font-bold text-blue-500'>Email Verification</h2>
                <img src={EmailVerificationImg} alt="Email Verification" className='mx-auto' />
                <p className='text-justify'>Thanks for creating an account, we have sent an email verification link to email address, click the link to confirm your account creation. The link will expire in 15 minutes.</p>
            </div>
        </div>
    )
}

export default EmailVerification