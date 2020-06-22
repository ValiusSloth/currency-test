import React from 'react'
import BtcInput from './btc-input'

class ExchangeRates extends React.Component
{
    /**
     * @param {Object} props
     * @param {Object} props.data
     * @param {Object} props.data.bpi currencies with exchange rate data
     */
    constructor(props)
    {
        super(props)
        this.state = {
            amount: null
        }
    }

    render()
    {
        return (
            <div className="exchange-rates-component">
                <BtcInput onInputChange={value => this.setState({ amount: value })}/>
            </div>
        )
    }
}

export default ExchangeRates