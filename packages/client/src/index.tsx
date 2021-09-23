import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ReactQueryProvider from './providers/ReactQueryProvider'

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
