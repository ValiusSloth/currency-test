import React from 'react'
import CurrencyItem from './currency-item'

const CurrencyList = ({ currencies, currencyData }) => (
    <div className="currency-list-component">
        {currencies.map(currency => (
            <CurrencyItem currency={currency} rate={currencyData[currency].rate} />
        ))}
    </div>
)

export default CurrencyList