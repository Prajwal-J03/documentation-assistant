import React from 'react'
import Navbar from '../components/Navbar'

const TermsOfService = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

                <p className="mb-4 text-sm">
                    Last Updated: 13/02/2026
                </p>

                <p className="mb-6">
                    Welcome to <strong>AI Legatrix</strong> Platform. By accessing or using our services, you agree to
                    these Terms of Service. If you do not agree, please do not use the
                    Platform.
                </p>

                <Section title="1. Nature of Service">
                    <p>
                        Our Platform provides AI-powered legal assistance tools including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Legal information responses</li>
                        <li>Document drafting based on templates</li>
                        <li>Document summarization and translation</li>
                        <li>Question-answering related to uploaded documents</li>
                    </ul>
                    <p className="mt-3 font-semibold">
                        We are not a law firm and do not provide legal advice. For legal
                        advice, consult a qualified advocate registered under the Bar
                        Council of India.
                    </p>
                </Section>

                <Section title="2. Eligibility">
                    <ul className="list-disc ml-6 space-y-1">
                        <li>You must be at least 18 years old.</li>
                        <li>You must have legal capacity to enter into a binding agreement.</li>
                        <li>You must comply with applicable Indian laws.</li>
                    </ul>
                </Section>

                <Section title="3. User Accounts">
                    <p>
                        You are responsible for maintaining confidentiality of your account
                        and all activities under it. We may suspend accounts for misuse or
                        violation of these Terms.
                    </p>
                </Section>

                <Section title="4. Subscription & Payments">
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Some features require a paid subscription.</li>
                        <li>Fees are billed according to the selected plan.</li>
                        <li>Payments are non-refundable unless stated otherwise.</li>
                        <li>We may modify pricing with prior notice.</li>
                    </ul>
                </Section>

                <Section title="5. AI-Generated Content Disclaimer">
                    <p>
                        AI-generated content may contain errors or inaccuracies. You are
                        responsible for reviewing and validating all documents before use.
                        We do not guarantee legal enforceability of generated documents.
                    </p>
                </Section>

                <Section title="6. User Content">
                    <p>
                        You retain ownership of documents you upload. You represent that
                        you have the legal right to use and upload such content.
                    </p>
                </Section>

                <Section title="7. Prohibited Use">
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Illegal activities</li>
                        <li>Fraudulent document creation</li>
                        <li>System abuse or reverse engineering</li>
                        <li>Uploading malicious or unlawful content</li>
                    </ul>
                </Section>

                <Section title="8. Limitation of Liability">
                    <p>
                        To the maximum extent permitted by Indian law, we are not liable
                        for any indirect or consequential damages. Our total liability
                        shall not exceed the amount paid by you in the last 3 months.
                    </p>
                </Section>

                <Section title="9. Governing Law">
                    <p>
                        These Terms are governed by the laws of India. Disputes shall be
                        subject to the jurisdiction of courts located in Bangalore.
                    </p>
                </Section>

                <Section title="10. Changes to Terms">
                    <p>
                        We may update these Terms from time to time. Continued use of the
                        Platform means you accept the updated Terms.
                    </p>
                </Section>

                <Section title="11. Contact">
                    <p>Email: contactus@ailegatrix.com</p>
                    <p>Company Name: AI Legatrix</p>
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

export default TermsOfService
