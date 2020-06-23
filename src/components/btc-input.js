import React from 'react'
import NumberFormat from 'react-number-format'

/**
 * Callback for change in input field
 * 
 * @callback onInputChange
 * @param {string} value 
 */

/**
 * @param {Object} props
 * @param {BtcInput~onInputChange} props.onInputChange
 */
const BtcInput = ({ onInputChange, amount }) => (
    <div className="component-btc-input">
        <label>BTC amount:</label>
        <NumberFormat amount={amount ? amount : 0} onValueChange={({value}) => onInputChange(value)} />
    </div>
)

export default BtcInput