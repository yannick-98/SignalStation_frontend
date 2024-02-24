import React from 'react'

const About = () => {
    return (
        <div className='space-y-6 mx-12 my-6 pt-8'>
            <h2 className='text-5xl pb-6'><span className='text-orange-600'>About </span>Us</h2>
            <p className='text-2xl'>Welcome to <span className='text-orange-600'>Signal Station</span>, your source for advanced financial information...</p>

            <h3 className='text-xl'>Our <span className='text-orange-600'>Mission</span></h3>
            <p>At Signal Station, we strive to democratize access to cutting-edge financial analysis...</p>

            <h3 className='text-xl'>How It <span className='text-orange-600'>Works</span></h3>
            <p>Our software uses advanced artificial intelligence algorithms to analyze large volumes of real-time market data...</p>

            <h3 className='text-xl'><span className='text-orange-600'>Key</span> Features</h3>
            <ul>
                <li><strong>Predictive Analysis:</strong> Predictions based on historical data and current trends.</li>
                <li><strong>Real-Time Updates:</strong> Receive instant information on significant market changes.</li>
                <li><strong>Asset Diversification:</strong> Comprehensive coverage from stocks to commodities.</li>
            </ul>

            <h3 className='text-xl'>Our <span className='text-orange-600'>Commitment</span></h3>
            <p>At Signal Station, we are committed to delivering the highest quality in financial analysis...</p>

            <p>Join us and take control of your financial future!</p>
        </div>
    )
}

export default About
