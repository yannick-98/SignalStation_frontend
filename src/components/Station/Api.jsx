import { useState, useEffect } from 'react';

const getStockDaily = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetchStocks()
    }, []);

    const fetchStocks = async () => {
        const url = "https://signalstation-88077ce0d55f.herokuapp.com/api/GetDaily";
        let request = await fetch(url, {
            method: "GET",
        });
        const data = await request.json();
        const processedStocks = data.stocks.map((st) => {
            const id = st._id;
            const symbol = st.symbol;
            const data = st.data;
            return { id, symbol, data };
        });
        setStocks(processedStocks);
    };

    return stocks
}

const getStockWeekly = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetchStocks()
    }, []);

    const fetchStocks = async () => {
        const url = "https://signalstation-88077ce0d55f.herokuapp.com/api/GetWeekly";
        let request = await fetch(url, {
            method: "GET"
        });
        const data = await request.json();
        const processedStocks = data.stocks.map((st) => {
            const id = st._id;
            const symbol = st.symbol;
            const data = st.data;
            return { id, symbol, data };
        });
        setStocks(processedStocks);
    };

    return stocks
}

export {
    getStockDaily,
    getStockWeekly,
}
