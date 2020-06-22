import React from 'react'

class CurrencyItem extends React.Component
{
    render()
    {
        return(
            <div className="currency-item-component">
                <div>{this.props.currency}</div>
                <span>{this.props.rate}</span>
                <button>Remove</button>
            </div>
        )
    }
}

export default CurrencyItem