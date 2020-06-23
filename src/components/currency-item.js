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
            <div className="component-currency-item">
                <div>{this.props.currencyData.code}</div>
                <NumberFormat value={this.props.amount * this.props.currencyData.rate_float} 
                              displayType={'text'} 
                              thousandSeparator={true} 
                              prefix={this.decodeHtml(this.props.currencyData.symbol)}
                              decimalScale={2} />
                <button onClick={() => this.props.onCurrencyRemoveClick(this.props.currencyData.code)}>Remove</button>
            </div>
        )
    }
}

export default CurrencyItem