import React from 'react'
import CurrencyItem from './currency-item'

const CurrencyList = ({ currencies, currencyData, amount }) => (
    <div className="currency-list-component">
        {currencies.map(currency => (
            <CurrencyItem key={currency} currencyData={currencyData[currency]} amount={amount} />
        ))}
    </div>
)

export default CurrencyList