import ReactDOM from 'react-dom'
import React from 'react'
import CurrencyWidget from './CurrencyWidget'
import './scss/index.scss'

const container = document.querySelector('#app-container')

ReactDOM.render(<CurrencyWidget />, container)
