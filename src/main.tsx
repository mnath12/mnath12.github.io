import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
/*import Home from './pages/Home.tsx'
import Sudoku from './pages/Sudoku.tsx'
import Reversi from './pages/Reversi.tsx'
import Research from './pages/Research.tsx' 

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
              path: "/",
              element: <Home/>
            }, 
            {
              path: "/projects",
              element: <Sudoku/>,
              children: [{
                  path: "/projects/sudoku",
                  element: <Sudoku/>
              },
              {
                  path: "/projects/reversi",
                  element: <Reversi/>
              }]
            }, 
            {
              path: "/research",
              element: <Research/>
            }
        ]
        
    }
])*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter basename= "/">
      <ChakraProvider>
      <App/>

      </ChakraProvider>
      </HashRouter>
  </React.StrictMode>,
)
