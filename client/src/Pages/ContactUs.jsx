import React from 'react'
import Navbar from '../components/Navbar'

const ContactUs = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                <p className="mb-8">
                    Have questions about AI Legatrix? Need help with subscriptions,
                    documents, or enterprise plans? Our team is here to help.
                </p>

                <Section title="Send Us a Message">
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">
                                <span className="text-red-600">*</span> Name
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                <span className="text-red-600">*</span> Email
                            </label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">
                                <span className="text-red-600">*</span> Message
                            </label>
                            <textarea
                                rows="6"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                placeholder="Describe your query..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 active:translate-y-1 transition"
                        >
                            Submit
                        </button>
                    </form>
                </Section>

                <Section title="Other Ways to Reach Us">
                    <p>Email: <strong>contactus@ailegatrix.com</strong></p>
                    <p className="mt-2">Phone: <strong>+91 1234567890</strong></p>
                    <p className="mt-2">Location: Bangalore, India</p>
                </Section>

                <Section title="Business & Enterprise Inquiries">
                    <p>
                        For enterprise plans, bulk access, or institutional partnerships,
                        please contact us via email with the subject line:
                        <strong> "Enterprise Inquiry – AI Legatrix"</strong>.
                    </p>
                </Section>
            </div>
        </div>
    )
}

const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="space-y-3">{children}</div>
    </div>
)

export default ContactUs
