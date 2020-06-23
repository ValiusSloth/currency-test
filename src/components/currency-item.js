import React from 'react'
import NumberFormat from 'react-number-format'

class CurrencyItem extends React.Component
{
    decodeHtml(symbol)
    {
        let el = document.createElement('textarea')

        el.innerHTML = symbol

        return el.value;

    }

    render()
    {
        return(
            <div className="currency-item-component">
                <div>{this.props.currency}</div>
                <NumberFormat value={this.props.amount * this.props.currencyData.rate_float} 
                              displayType={'text'} 
                              thousandSeparator={true} 
                              prefix={this.decodeHtml(this.props.currencyData.symbol)}
                              decimalScale={2} />
                <button>Remove</button>
            </div>
        )
    }
}

export default CurrencyItem