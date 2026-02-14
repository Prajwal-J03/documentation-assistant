import React from 'react'
import Navbar from '../components/Navbar'

const Company = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-6">About AI Legatrix</h1>

                <p className="mb-6">
                    AI Legatrix is an AI-powered legal documentation assistance platform
                    designed specifically for users in India. Our mission is to make
                    legal document creation, understanding, and management simple,
                    accessible, and efficient.
                </p>

                <Section title="Our Mission">
                    <p>
                        We aim to simplify legal processes using artificial intelligence,
                        helping individuals, startups, and businesses generate and
                        understand legal documents with clarity and speed.
                    </p>
                </Section>

                <Section title="What We Do">
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Provide AI-powered legal information assistance</li>
                        <li>Generate legal documents from structured templates</li>
                        <li>Summarize and translate legal documents</li>
                        <li>Allow users to ask questions about uploaded documents</li>
                    </ul>
                </Section>

                <Section title="Our Commitment">
                    <p>
                        We are committed to maintaining user privacy, platform security,
                        and transparency in how our AI systems operate. While we provide
                        legal assistance tools, we do not offer legal advice or act as a
                        law firm.
                    </p>
                </Section>

                <Section title="Company Information">
                    <p>Company Name: AI Legatrix</p>
                    <p>Location: Bangalore, India</p>
                    <p>Email: contactus@ailegatrix.com</p>
                </Section>
            </div>
        </div>
    )
}

const Section = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <div className="space-y-2">{children}</div>
    </div>
)

export default Company
