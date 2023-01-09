import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalImageProvider } from './context/ModalImageContext'
import { ListImageProvider } from './context/ListImageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListImageProvider>
      <ModalImageProvider>
        <App />
      </ModalImageProvider>
    </ListImageProvider>
  </React.StrictMode>,
)
