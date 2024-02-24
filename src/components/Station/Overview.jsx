import React from 'react'
import { getStockDaily } from '../Station/Api';


const Overview = () => {
    return (
        <div className='flex flex-wrap text-center w-full h-full overflow-y-scroll'>
            <section className='w-full max-w-[30rem] mx-auto lg:w-1/3 flex flex-col gap-3 m-2'>
                <StockList />
            </section>
            <section className='w-full mx-auto lg:w-2/3 flex flex-col gap-3 m-2'>
                <StockList />
            </section>

        </div>
    )
}

const StockList = () => {
    const stockList = getStockDaily();
    const list = [];
    for (let i = 0; i < stockList.length; i++) {
        let symbol = stockList[i].symbol;
        let dataKeys = Object.keys(stockList[i].data);
        let lastData = stockList[i].data[dataKeys[0]];
        let close = lastData["4. close"];
        list.push(
            <div key={i} className=' w-10/12 h-12 mx-auto p-2 flex justify-between items-center 
            border rounded-lg bg-black bg-opacity-40 border-slate-400 hover:scale-110'>
                <p className='text-white text-xs'>{symbol} </p>
                <p className='text-white text-xs'>{close}</p>
            </div>
        )
    }
    return list;
}

const SignalsList = () => {
    return (
        <div className='flex flex-wrap text-center w-full h-full overflow-y-scroll'>

        </div>
    )
}

export default Overview
