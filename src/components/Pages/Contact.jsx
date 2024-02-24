import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='h-screen flex flex-col lg:flex-row  justify-center items-center pt-10'>
            <div className='flex flex-col text-center items-center justify-around gap-3 lg:justify-start lg:w-1/2 h-full lg:py-12'>
                <p className='px-12 font-mono'>Have questions or feedback? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>
                <form className=' flex flex-col gap-2 w-80 text-orange-600 space-y-4 lg:pt-12' action="">
                    <h1 className='text-2xl'>Send a message</h1>
                    <input id='name' type="Name" placeholder='Name' className='rounded' />
                    <input id="email" type="Email" placeholder='Email' className='rounded' />
                    <textarea id="message" placeholder='Message' className='rounded' ></textarea>
                    <input type="submit" className=' border rounded-lg border-orange-600 text-md' value="Send" />
                </form>
                <div className='flex gap-4 pt-6'>
                    <NavLink to="/Home">
                        <img src="src\img\linkedin-icon.png" alt="" className='h-8' />
                    </NavLink>
                    <NavLink to="/Home">
                        <img src="src\img\email-icon.png" alt="" className='h-8' />
                    </NavLink>
                    <NavLink to="/Home">
                        <img src="src\img\whatsapp-icon.png" alt="" className='h-8' />
                    </NavLink>
                </div>
            </div>

            <div className='lg:w-1/2 h-1/2 lg:h-full py-12'>
                <div className='px-12 font-mono space-y-8'>
                    <h2 className='text-xl font-bold'>Frequently Asked Questions</h2>

                    <div className='space-y-2'>
                        <h3 className='font-bold'>What is Signal Station?</h3>
                        <p>Signal Station is a cutting-edge financial information service powered by artificial intelligence. We provide real-time analysis of market values, including stocks, currencies, commodities, and more.</p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-bold'>How does the subscription work?</h3>
                        <p>Subscribing to Signal Station gives you access to our advanced AI-driven analysis tools. Simply choose a subscription plan, sign up, and start receiving real-time market insights immediately.</p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-bold'>Is my financial data secure?</h3>
                        <p>Yes, we take the security of your financial data seriously. Signal Station employs industry-standard encryption protocols to ensure the confidentiality and integrity of your information.</p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-bold'>Can I cancel my subscription at any time?</h3>
                        <p>Absolutely. You have the flexibility to cancel your subscription at any time without any additional fees. Your access will continue until the end of the billing period.</p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-bold'>How do I contact customer support?</h3>
                        <p>If you have any questions or need assistance, please visit our <a href="/contact">Contact Us</a> page. Our customer support team is ready to help you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
