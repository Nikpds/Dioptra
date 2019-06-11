import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'
import App from './App'
import * as serviceWorker from './serviceWorker'
import LocalizationProvider from './contexts/LocalizationProvider';
import './styles/index.less'
const Root = (
  <BrowserRouter>
    <LocalizationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocalizationProvider>
  </BrowserRouter>
)

ReactDOM.render(Root, document.getElementById('root'))

serviceWorker.unregister()
