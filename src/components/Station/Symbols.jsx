import React from 'react'
import Chart from 'react-apexcharts';
import { useState } from 'react'
import { getStockDaily, getStockWeekly } from '../Station/Api';




const Symbols = () => {
    const [option1, setOption1] = useState("EURUSD");
    const [option2, setOption2] = useState("1D");
    const daily = getStockDaily()
    const weekly = getStockWeekly()
    const chartDataDaily = daily.filter(st => st.symbol === option1).map(st => st.data)[0]
    const chartDataWeekly = weekly.filter(st => st.symbol === option1).map(st => st.data)[0]
    const chartData = option2 === "1D" ? chartDataDaily : chartDataWeekly
    const lastData = chartData ? Object.values(chartData)[1] : ''
    const close = lastData ? lastData["4. close"] : ''
    const high = lastData ? lastData["2. high"] : ''
    const low = lastData ? lastData["3. low"] : ''
    const variation = lastData ? (lastData["4. close"] - lastData["1. open"]) / lastData["1. open"] : ''
    const variationPercentage = variation ? (variation * 100).toFixed(2) : ''
    const rsi = lastData.rsi ? lastData.rsi.RSI : ''
    const atr = lastData.atr ? lastData.atr.ATR : ''
    const adx = lastData.adx ? lastData.adx.ADX : ''
    const bbands = lastData.bbands ? lastData.bbands['Real Middle Band'] : ''
    const ema10 = lastData.ema10 ? lastData.ema10.EMA : ''
    const ema20 = lastData.ema20 ? lastData.ema20.EMA : ''
    const ema50 = lastData.ema50 ? lastData.ema50.EMA : ''
    const ema200 = lastData.ema200 ? lastData.ema200.EMA : ''


    return (
        <div className='flex flex-col w-full h-[80vh]  text-center gap-8'>
            <section className='space-x-2 font-serif w-full h-[30px] pt-2'>
                <select className='bg-gray-300 text-black font-bold rounded-md' onChange={(event) => setOption1(event.target.value)}>
                    <option value="EURUSD">EUR/USD</option>
                    <option value="EURGBP">EUR/GBP</option>
                    <option value="EURCHF">EUR/CHF</option>
                    <option value="EURCAD">EUR/CAD</option>
                    <option value="EURJPY">EUR/JPY</option>
                    <option value="EURNZD">EUR/NZD</option>
                    <option value="GBPUSD">GBP/USD</option>
                    <option value="GBPCAD">GBP/CAD</option>
                    <option value="AUDUSD">AUD/USD</option>
                    <option value="NZDUSD">NZD/USD</option>
                </select>
                <select className='bg-gray-300 text-black font-bold rounded-md' onChange={(event) => setOption2(event.target.value)}>
                    <option value="1D">1D</option>
                    <option value="1W">1W</option>
                </select>
            </section>

            <section className='flex flex-wrap w-full  '>
                <div className='flex flex-col gap-12 w-full lg:w-2/3 text-start  pb-12 '>
                    <div className='flex w-full justify-around'>
                        <p className='flex flex-col text-center'>Price: <span className='text-green-400'>{close}</span></p>
                        <p className='flex flex-col text-center'>High: <span className='text-green-400'>{high}</span></p>
                        <p className='flex flex-col text-center'>Low: <span className='text-green-400'>{low}</span></p>
                        <p className='flex flex-col text-center'>Variation: <span className='text-green-400'>{variationPercentage}%</span></p>
                    </div>
                    <div className=''>
                        <CandlestickChart data={chartData} symbol={option1} tf={option2} />
                    </div>
                </div>

                <div className='w-full lg:w-1/3 flex flex-col text-start gap-6 px-6'>
                    <p className='flex justify-between w-full px-1 hover:border'>RSI: <span>{rsi}</span> </p>
                    <p className='flex justify-between w-full px-1 hover:border'>ATR: <span>{atr}</span></p>
                    <p className='flex justify-between w-full px-1 hover:border'>ADX: <span>{adx}</span></p>
                    <p className='flex justify-between w-full px-1 hover:border'>BBANDS: <span>{bbands}</span></p>
                    <p className='flex justify-between w-full px-1 hover:border'>EMA10: <span>{ema10}</span></p>
                    <p className='flex justify-between w-full px-1 hover:border'>EMA20: <span>{ema20}</span></p>
                    <p className='flex justify-between w-full px-1 hover:border'>EMA50: <span>{ema50}</span></p>
                    <p className='flex justify-between w-full px-1 hover:border'>EMA200: <span>{ema200}</span></p>
                </div>
            </section>
        </div>
    )
}

const CandlestickChart = ({ data, symbol, tf }) => {
    if (data) {
        const candlestickData = Object.keys(data).map(date => {
            const [year, month, day] = date.split('-');
            const timestamp = new Date(year, month - 1, day).getTime();
            return {
                x: timestamp,
                y: [data[date]['1. open'], data[date]['2. high'], data[date]['3. low'], data[date]['4. close']],
            };
        });

        const candlestickOptions = {
            chart: {
                type: 'candlestick',
                height: 500,
            },
            title: {
                text: `${symbol}, ${tf} chart`,
                align: 'left',
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                tooltip: {
                    enabled: true,
                },
                opposite: true,
            },
            grid: {
                show: false,
            },
        };

        const candlestickSeries = [
            {
                data: candlestickData,
            },
        ];

        return (
            <Chart options={candlestickOptions} series={candlestickSeries} type="candlestick" height={500}
                className='text-black text-xs  sm:ml-6 max-w-[90vw]' />
        );
    } else {
        return <p>Loading...</p>;
    }
};


export default Symbols
