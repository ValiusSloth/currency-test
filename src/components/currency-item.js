import React from 'react'
import NumberFormat from 'react-number-format'

/**
 * Callback for currency item button click
 * 
 * @callback onCurrencyRemoveClick
 * @param {string} currency 
 */

/**
 * 
 * @param {Object} props
 * @param {Object} props.currencyData data related to currency item
 * @param {Int}    props.amount selected amount
 * @param {CurrencyItem~onCurrencyRemoveClick} props.onCurrencyRemoveClick
 */
const CurrencyItem = ({ currencyData, amount, onCurrencyRemoveClick }) => {
    const decodeHtml = (symbol) => {
        let el = document.createElement('textarea')

        el.innerHTML = symbol

        return el.value;
    }

    return (
        <div className="component-currency-item">
                <div>{currencyData.code}</div>
                <NumberFormat value={amount * currencyData.rate_float} 
                              displayType={'text'} 
                              thousandSeparator={true} 
                              prefix={decodeHtml(currencyData.symbol)}
                              decimalScale={2}
                              renderText={value => <div>{value}</div>} />
                <button onClick={() => onCurrencyRemoveClick(currencyData.code)}>Remove</button>
        </div>
    )
}

export default CurrencyItem