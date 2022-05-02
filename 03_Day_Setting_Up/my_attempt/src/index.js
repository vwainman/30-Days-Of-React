import React from 'react'
import ReactDOM from 'react-dom'

const header = (
    <header>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Vincent Wainman</p>
        <small>May 1 2022</small>
    </header>
)
const rootElement = document.getElementById('root')

ReactDOM.render(header, rootElement)