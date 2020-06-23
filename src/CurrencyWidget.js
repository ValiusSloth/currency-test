import React, { useEffect, useState } from 'react'
import ExchangeRates from './components/exchange-rates'


const CurrencyWidget = () => {
    let [state, setState] = useState({ data: null });
    let [delay, setDelay] = useState(1000)

    useEffect(()=>{
        const intervalId = setInterval(() => {
            fetchData();
        }, delay)

        return () => clearInterval(intervalId);
    }, [delay]);

    const fetchData = () => {
        console.log(state.timer)
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => setState({ data }))
        .then(setDelay(60000))
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <ExchangeRates data={state.data}/>
    )
}

export default CurrencyWidget