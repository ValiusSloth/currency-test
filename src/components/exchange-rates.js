import React from 'react'
import BtcInput from './btc-input'
import CurrencySelect from './currency-select'

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
            amount: null,
            activeCurrencies: [],
        }
    }

    addActiveCurrency(currency)
    {
        if (this.state.activeCurrencies.indexOf(currency) === -1) {
            this.setState({ activeCurrencies: this.state.activeCurrencies.push(currency) })
        }
    }

    render()
    {
        return (
            <div className="exchange-rates-component">
                <BtcInput onInputChange={value => this.setState({ amount: value })}/>
                <CurrencySelect currencies={this.props.data ? Object.keys(this.props.data.bpi) : null} 
                                onCurrencySelect={value => this.addActiveCurrency(value)}/>
            </div>
        )
    }
}

export default ExchangeRates