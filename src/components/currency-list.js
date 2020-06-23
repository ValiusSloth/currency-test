import React from 'react'
import CurrencyItem from './currency-item'

/**
 * Callback for currency item button click
 * 
 * @callback onCurrencyRemoveClick
 * @param {string} currency 
 */

/**
 * 
 * @param {Object} props
 * @param {Array}  props.currencies active currencies
 * @param {Object} props.currencyData contains currency data
 * @param {Int}    props.amount selected currency amount
 * @param {CurrencyList~onCurrencyRemoveClick}
 */
const CurrencyList = ({ currencies, currencyData, amount, onCurrencyRemoveClick }) => (
    <div className="component-currency-list">
        {currencies.map(currency => (
            <CurrencyItem onCurrencyRemoveClick={(value) => onCurrencyRemoveClick(value)}
                          key={currency} 
                          currencyData={currencyData[currency]} 
                          amount={amount} />
        ))}
    </div>
)

export default CurrencyList