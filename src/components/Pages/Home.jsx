import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer1 from '../Layer/Footer';

const Home = () => {
    const [signCard, setSignCard] = useState(false);

    return (
        <div className='flex flex-col h-full text-center items-center space-y-5 md:space-y-12 justify-start gap-8 md:gap-14 pt-8'>
            <div className='py-2'>
                <p id='text1' className='text-lg text-gray-300 pb-8'>Ready for the future?</p>
                <p id='text2' className='text-xl sm:text-2xl mx-8 max-w-[800px]'>Receive market information in real time and save hours in your operations with personalized signals from Signal Station</p>
            </div>
            <div id='content1' className='flex flex-col md:flex-row md:mx-auto md:justify-center gap-5 lg:gap-14 '>
                <img src='/src/img/Desktop1.png' id='poster' className=' w-full sm:w-[600px] md:w-2/3 md:max-h-[380px] md:max-w-[600px] mx-auto md:mx-0 rounded-lg' alt="" />
                <div className=' flex flex-col gap-3 md:gap-4 lg:gap-7 mx-2 md:w-1/3 text-start text-lg lg:text-xl '>
                    <h1 className='text-2xl pb-4'>Discover the free <span className='text-orange-600'>investment</span> software that makes your life <span className='text-orange-600'>easier</span></h1>
                    <p>· delegate the heavy lifting</p>
                    <p>· automate your strategies</p>
                    <p>· become an algorithmic trader</p>
                    <NavLink to="/Station" className='mx-auto border-2 rounded-lg p-1 mt-8 md:mt-0 text-sm border-orange-600 text-orange-600'>Start now</NavLink>
                    <p className='text-xs text-center'>Don't worry, it's free ;{')'}</p>
                </div>

            </div>
            <div id='content2' className='mx-8 space-y-16 md:flex md:gap-12 md:space-y-0 md:py-12 '>
                <section className='max-w-[500px] flex flex-col md:justify-between md:h-full'>
                    <p className='text-left text-xl py-8 md:py-0 md:pb-8'>Signal Station is a technical analysis software that provides real-time information about the market,
                        prices, indicators and much more </p>
                    <SignalsNav />
                    <SignalsTable />
                </section>

                <section className='max-w-[500px] flex flex-col md:justify-between md:h-full'>
                    <SignalsNav />
                    <SignalsTable />
                    <p className='text-left text-xl py-8 md:py-0 md:pt-8'>You will receive personalized signals in real time, configure your own strategies for each asset
                        and have detailed market monitoring at all times</p>
                </section>
            </div>
            <div id='content3' className='flex flex-wrap justify-between w-full max-w-[1000px]'>
                <section className='flex flex-col items-center w-1/2 md:w-1/4 gap-2 px-5 pb-8 big '>
                    <img src="/src/img/clock.png" alt="" className='w-[50px] h-[50px] ' />
                    <h1 className='text-sm font-bold h-[50px] flex items-center '>Comprehensive and Real-Time Information</h1>
                    <p className='text-xs pt-5'>Highlight the breadth and real-time updates of the information your platform provides. Mention coverage of a wide range of data, including real-time prices,
                        key indicators, and technical analysis, offering users a complete view of the financial market</p>
                </section>
                <section className='flex flex-col items-center w-1/2 md:w-1/4 gap-2 px-5 pb-8 big'>
                    <img src="/src/img/tool.png" alt="" className='w-[50px] h-[50px] ' />
                    <h1 className='text-sm font-bold h-[50px] flex items-center '>Advanced Analysis Tools</h1>
                    <p className='text-xs pt-5'>Emphasize the advanced analytical tools your platform offers. Showcase features such as interactive charts, predictive analysis amdorithms, and any unique
                        functionality that gives users a competitive edge in decision-making</p>
                </section>
                <section className='flex flex-col items-center w-1/2 md:w-1/4 gap-2 px-5 pb-8 big'>
                    <img src="/src/img/chart.png" alt="" className='w-[50px] h-[50px] ' />
                    <h1 className='text-sm font-bold h-[50px] flex items-center '>Accurate Probabilities and Forecasts</h1>
                    <p className='text-xs pt-5'>Showcase your software's ability to generate accurate probabilities and forecasts based on historical data and advanced algorithms. Highlight instances
                        where your platform provided successful predictions, demonstrating the reliability of your analyses</p>
                </section>
                <section className='flex flex-col items-center w-1/2 md:w-1/4 gap-2 px-5 pb-8 big'>
                    <img src="/src/img/puzzle.png" alt="" className='w-[50px] h-[50px] ' />
                    <h1 className='text-sm font-bold h-[50px] flex items-center '>Intuitive and Customizable Interface</h1>
                    <p className='text-xs pt-5'>Mention an intuitive and customizable user interface that allows users to tailor the platform to their specific needs. A comfortable and user-friendly
                        experience can be a key point in attracting both novice traders and more experienced investors</p>
                </section>
            </div>

            <div id='content4' className='text-start text-xl w-full max-w-[1000px] space-y-3'>
                <h1 className='text-xl text-center pb-10'>Frequent questions</h1>
                <details>
                    <summary>What is Signal Station?</summary>
                    <p className='p-2 text-sm'>Signal Station is a technical analysis software that provides real-time information about the market, prices, indicators and much more</p>
                </details>
                <details>
                    <summary>What advantages does it offer?</summary>
                    <p className='p-2 text-sm'>Signal Station is a technical analysis software that provides real-time information about the market, prices, indicators and much more</p>
                </details>
                <details>
                    <summary>What assets can I analyze?</summary>
                    <p className='p-2 text-sm'>Signal Station is a technical analysis software that provides real-time information about the market, prices, indicators and much more</p>
                </details>
                <details>
                    <summary>What information does it provide?</summary>
                    <p className='p-2 text-sm'>Signal Station is a technical analysis software that provides real-time information about the market, prices, indicators and much more</p>
                </details>
                <details>
                    <summary>Where can I learn more about algorithmic trading?</summary>
                    <p className='p-2 text-sm'>Signal Station is a technical analysis software that provides real-time information about the market, prices, indicators and much more</p>
                </details>
            </div>
            <Footer1 />
        </div >
    )
}

const SignalsNav = () => {
    const [option, setOption] = useState("Opción 1");

    return (
        <section className='flex justify-between space-x-1 text-[10px] w-full h-[20px] sm:gap-2 md:gap-5 pt-2'>
            <select className='bg-gray-300 text-black font-bold rounded-md w-1/6' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 1">EUR/USD</option>
                <option value="Opción 2">EUR/GBP</option>
                <option value="Opción 3">EUR/CHF</option>
            </select>
            <select className='bg-gray-300 text-black font-bold rounded-md w-3/6' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 1">RSI</option>
                <option value="Opción 2">MACD</option>
                <option value="Opción 3">Stochastic</option>
            </select>
            <select className='bg-gray-300 text-black font-bold rounded-md w-1/12' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 1">H1</option>
                <option value="Opción 2">H4</option>
                <option value="Opción 3">1D</option>
            </select>
            <select className='bg-gray-300 text-black font-bold rounded-md w-3/12' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 1">Last hour</option>
                <option value="Opción 2">Last day</option>
                <option value="Opción 3">Last week</option>
            </select>
        </section>
    )

}

const SignalsTable = () => {
    const data = [];
    for (let i = 0; i < 30; i++) {
        data.push(
            <div key={i} className="flex justify-between text-center lg:text-start w-full space-x-1 md:gap-5 hover:bg-white hover:bg-opacity-30 
            text-xs ">
                <p className='ml-2 w-1/6'>EUR/USD</p>
                <p className='ml-2 w-3/6 text-green-400'>Bullish crossover in <span className='text-white'>stochastic</span></p>
                <p className='ml-2 w-1/12'>H1</p>
                <p className='ml-2 w-3/12'>31-dec 12:44</p>
            </div>);
    }

    return (
        <section className='flex flex-col w-full h-80 overflow-y-scroll pt-2 '>
            {data}
        </section>
    )
}

const SignCard = () => {
    const [inup, setInup] = useState(false);

    return (
        <>
            {inup ? <SignUpCard /> : <SignInCard />}

            <div className=' flex flex-col gap-2 pt-2'>
                <p className='text-xs'>{inup ? "Have an account?" : "Don't have an account?"}</p>
                <button onClick={() => setInup(!inup)}
                    className='text-sm rounded-lg border-2 mx-auto p-1 uppercase border-orange-600'>
                    {inup ? "Sign In" : "Create free account"}
                </button>
            </div>
        </>
    )
}

const SignInCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };


    return (
        <div className=' border-[2px] rounded-lg bg-black bg-opacity-50 border-orange-600
            flex flex-col justify-around p-5 w-3/4 h-1/2
            md:w-3/6 md:h-3/6 sm:max-w-lg'>

            <h1 className='text-lg uppercase font-bold text-orange-600'>·Sign in·</h1>

            <form onSubmit={handleSubmit} className='flex flex-col text-start gap-2'>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='p-0.5 rounded-xl bg-black border border-orange-600'
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='p-0.5 rounded-xl bg-black border border-orange-600'

                />
                <label className='flex flex-row gap-1'>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <p className='p-0.5 text-xs'>Remember me</p>
                </label>
                <br />
                <button type="submit"
                    className='rounded-lg mx-auto p-1 bg-orange-700'
                >Sign In</button>
            </form>

        </div>
    )
}

const SignUpCard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className=' text-sm border-[2px] rounded-lg bg-black bg-opacity-50 border-orange-600
            flex flex-col justify-around p-5 w-3/4 h-1/2
            md:w-3/6 md:h-3/6 sm:max-w-lg'>

            <h1 className='text-xl uppercase font-bold text-orange-600'>·Sign Up·</h1>

            <form onSubmit={handleSubmit} className='flex flex-col text-start gap-2'>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='p-0.5 rounded-xl bg-black border border-orange-600'
                />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='p-0.5 rounded-xl bg-black border border-orange-600'
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='p-0.5 rounded-xl bg-black border border-orange-600'
                />
                <label>Confirm password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='p-0.5 rounded-xl bg-black border border-orange-600'

                />
                <br />
                <button type="submit"
                    className='rounded-lg mx-auto p-1 text-base bg-orange-700'
                >Create</button>
            </form>

        </div>
    )
}


export default Home
