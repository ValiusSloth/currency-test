import React from 'react'

const BtcInput = ({ onInputChange }) => (
    <div className="btc-input-component">
        <label>BTC amount:</label>
        <input onChange={(e) => onInputChange(e.target.value)} />
    </div>
)

export default BtcInput