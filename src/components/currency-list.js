import React from 'react'
import CurrencyItem from './currency-item'

const CurrencyList = ({ currencies, currencyData, amount, onCurrencyRemoveClick }) => (
    <div className="currency-list-component">
        {currencies.map(currency => (
            <CurrencyItem onCurrencyRemoveClick={(value) => onCurrencyRemoveClick(value)}
                          key={currency} 
                          currencyData={currencyData[currency]} 
                          amount={amount} />
        ))}
    </div>
)

export default CurrencyList