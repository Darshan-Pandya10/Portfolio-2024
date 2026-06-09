import React from 'react'
import ReactDOM from 'react-dom/client'
import emailjs from '@emailjs/browser'
import App from './App.jsx'
import './index.css'

const publicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "PVjiiLT5X_8QjVDY0";
emailjs.init({ publicKey });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
