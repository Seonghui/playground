import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ReactQueryProvider from './providers/ReactQueryProvider'
import 'antd/dist/antd.css'

ReactDOM.render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>,
  document.getElementById('root'),
)
