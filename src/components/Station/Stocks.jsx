import React from 'react'

const Stocks = () => {
    const [stocks, setStocks] = useState({})

    useEffect(() => {
        getStocks()
    }, [])

    const getStocks = async () => {
        const url = "http://localhost:3901/api/Stock"
        let request = await fetch(url, {
            method: "GET"
        })
        const data = await request.json()
        console.log(data.stocks)
        const timeSeries = (data.stocks[0].data["Time Series (Daily)"])
        if (data.status === "success") {
            setStocks(timeSeries)
        }


    }

    const LastPrices = () => {
        const dates = Object.keys(stocks)
        const last = dates.slice(0, 1)

        let prices = []

        for (let date of last) {
            let day = {
                date: date,
                open: stocks[date]["1. open"],
                high: stocks[date]["2. high"],
                low: stocks[date]["3. low"],
                close: stocks[date]["4. close"],
            }
            prices.push(day)
        }

        console.log(prices)
        return prices
    }

    const lastPrices = LastPrices()

    return (
        <div>

        </div>
    )
}

export default Stocks
