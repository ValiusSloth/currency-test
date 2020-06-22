import React from 'react'

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
const BtcInput = ({ onInputChange }) => (
    <div className="btc-input-component">
        <label>BTC amount:</label>
        <input onChange={(e) => onInputChange(e.target.value)} />
    </div>
)

export default BtcInput