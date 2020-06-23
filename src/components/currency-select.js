import React from 'react'

class CurrencySelect extends React.Component
{
    /**
     * Callback for currency selection
     * 
     * @callback onCurrencySelect
     * @param {string} key 
     */

    /**
     * @param {Object} props
     * @param {Array}  props.currencies available currencies
     * @param {CurrencySelect~onCurrencySelect} props.onCurrencySelect
     */
    constructor(props)
    {
        super(props)
        this.state = {
            selected: 'USD',
        }
    }

    render()
    {
        return (
            <div className="currency-select-component">
                <label>Add currencies to compare:</label>
                <select onChange={(e) => this.setState({ selected: e.target.value })}>
                {this.props.currencies ? this.props.currencies.map(currency => (
                    <option key={currency}>{currency}</option>
                )) : null}
                </select>
                <button onClick={() => this.props.onCurrencySelect(this.state.selected)}>Add</button>
            </div> 
        )
    }
}

export default CurrencySelect