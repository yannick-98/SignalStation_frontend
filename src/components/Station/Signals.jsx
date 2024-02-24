import React from 'react'
import { useState } from 'react'

const Signals = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-12 xl:gap-0'>
            <div id="signals" className='flex flex-col w-full max-w-[800px] h-[60vh] xl:h-[80vh] justify-between space-y-2  lg:px-12'>
                <SignalsNav />
                <SignalsTable />
                <Buttons />
            </div>

            <div>
                <h1 className='text-sm'>Activated signals</h1>
            </div>
        </div>
    )
}

const SignalsNav = () => {
    const [option, setOption] = useState("Opción 0");

    return (
        <section className='flex justify-between space-x-1 text-xs font-serif w-full h-[30px] sm:gap-2 md:gap-5'>
            <select className='bg-gray-300 text-black font-bold rounded-md w-1/6' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 0">All</option>
                <option value="Opción 1">EUR/USD</option>
                <option value="Opción 2">EUR/GBP</option>
                <option value="Opción 3">EUR/CHF</option>
            </select>
            <select className='bg-gray-300 text-black font-bold rounded-md w-3/6' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 0">All</option>

                <option value="Opción 1">RSI</option>
                <option value="Opción 2">MACD</option>
                <option value="Opción 3">Stochastic</option>
            </select>
            <select className='bg-gray-300 text-black font-bold rounded-md w-1/12' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 0">All</option>
                <option value="Opción 1">H1</option>
                <option value="Opción 2">H4</option>
                <option value="Opción 3">1D</option>
            </select>
            <select className='bg-gray-300 text-black font-bold rounded-md w-3/12' onChange={(event) => setOption(event.target.value)}>
                <option value="Opción 0">All</option>
                <option value="Opción 1">Last hour</option>
                <option value="Opción 2">Last day</option>
                <option value="Opción 3">Last week</option>
            </select>
        </section>
    )

}

const SignalsTable = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push(
            <div className="flex justify-between text-center lg:text-start w-full space-x-1 md:gap-5 hover:bg-white hover:bg-opacity-30 
            text-xs sm:text-sm ">
                <p className='ml-2 w-1/6'>EUR/USD</p>
                <p className='ml-2 w-3/6 text-green-400'>Bullish crossover in <span className='text-white'>stochastic</span></p>
                <p className='ml-2 w-1/12'>H1</p>
                <p className='ml-2 w-3/12'>31-dec 12:44</p>
            </div>);
    }

    return (
        <section className='flex flex-col w-full overflow-y-scroll pt-2'>
            {data}
        </section>
    )
}

const Buttons = () => {
    return (
        <section className='flex justify-center space-x-1 text-sm font-serif w-full h-[30px] gap-2 md:gap-5 pt-2'>
            <button className='bg-black bg-opacity-40 text-white border px-2 pb-1 rounded-md '>All signals</button>
            <button className='bg-black bg-opacity-40 text-white border px-2 pb-1 rounded-md '>My signals</button>
        </section>
    )
}

export default Signals
