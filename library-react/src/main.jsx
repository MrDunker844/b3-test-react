import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './styles/global.css'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <App>

    </App>
      </BrowserRouter>
  </StrictMode>,
)
