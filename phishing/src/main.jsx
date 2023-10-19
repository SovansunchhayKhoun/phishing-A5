import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AxiosClientContext } from './context/AxiosClientContext.jsx'
import { AuthContext } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AxiosClientContext>
      <AuthContext>
        <App />
      </AuthContext>
    </AxiosClientContext>
  </React.StrictMode>,
)
