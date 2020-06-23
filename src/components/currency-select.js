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
            <div className="component-currency-select">
                <label>Add currencies to compare:</label>
                <select onChange={(e) => this.setState({ selected: e.target.value })}>
                <option value=''>Add currency...</option>
                {this.props.currencies ? this.props.currencies.map(currency => (
                    <option value={currency} key={currency}>{currency}</option>
                )) : null}
                </select>
                <button onClick={() => this.props.onCurrencySelect(this.state.selected)}>Add</button>
            </div> 
        )
    }
}

export default CurrencySelect