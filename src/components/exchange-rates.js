import React from 'react'
import BtcInput from './btc-input'
import CurrencySelect from './currency-select'
import CurrencyList from './currency-list'

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
        let currencies = this.state.activeCurrencies

        if (currencies.indexOf(currency) === -1) {
            currencies.push(currency)
            this.setState({ activeCurrencies: currencies })
        }
    }

    renderCurrencyList()
    {
        if (this.state.activeCurrencies.length) {
            return (
                <CurrencyList currencies={this.state.activeCurrencies} 
                              currencyData={this.props.data.bpi} 
                              amount={this.state.amount} />
            )
        }
    }

    render()
    {
        return (
            <div className="exchange-rates-component">
                <BtcInput amount={this.state.amount} onInputChange={value => this.setState({ amount: value })}/>
                <CurrencySelect currencies={this.props.data ? Object.keys(this.props.data.bpi) : null} 
                                onCurrencySelect={value => this.addActiveCurrency(value)}/>
                {this.renderCurrencyList()}
            </div>
        )
    }
}

export default ExchangeRates