import './App.css'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Sudoku from './pages/Sudoku'
import Research from './pages/Research.tsx'
import Reversi from './pages/Reversi'

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
        <Route path = '/research' element = {<Research/>}/>

      </Routes>
    </div>

    
    
     
     
    
    </>
  )
}

export default App
