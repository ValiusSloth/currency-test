import React from 'react'
import ExchangeRates from './components/exchange-rates'

class CurrencyWidget extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount()
    {
        this.fetchData()
    }

    async fetchData()
    {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .then(setInterval(() => this.fetchData(), 60000))
        .catch((error) => {
            console.log(error)
        })
    }

    render()
    {
        return (
            <ExchangeRates data={this.state.data} />
        )
    }
}

export default CurrencyWidget