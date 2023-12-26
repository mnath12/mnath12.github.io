import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter  basename={import.meta.env.PUBLIC_URL}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </HashRouter>

  </React.StrictMode>,
)
