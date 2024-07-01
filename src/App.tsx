import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Research from './pages/Research'
import Reversi from './pages/Reversi'
import Sudoku from './pages/Sudoku'
import MLStockPredict from './pages/MLStockPredict'


function App() {

  return (
    <>

   
    <NavBar></NavBar>
    
    <div className='container'>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/projects' element = {<Sudoku/>}/>
        <Route path = '/projects/sudoku' element = {<Sudoku/>}/>
        <Route path = '/projects/reversi' element = {<Reversi/>}/>
        <Route path = '/projects/stocks' element = {<MLStockPredict/>}/>
        <Route path = '/research' element = {<Research/>}/>

      </Routes> 
    </div>    
     
    
    </>
  )
}

export default App
