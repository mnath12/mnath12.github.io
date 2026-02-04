import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Research from './pages/Research'
import Reversi from './pages/Reversi'
import Sudoku from './pages/Sudoku'
import MLStockPredict from './pages/MLStockPredict'
import Courses from './pages/Courses'
import StudyGuideViewer from './pages/StudyGuideViewer'
import Experience from './pages/Experience'


function App() {

  return (
    <>

   
    <NavBar></NavBar>
    
    <div className='container' style={{ paddingTop: '120px' }}>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/projects' element = {<Sudoku/>}/>
        <Route path = '/projects/sudoku' element = {<Sudoku/>}/>
        <Route path = '/projects/reversi' element = {<Reversi/>}/>
        <Route path = '/projects/stocks' element = {<MLStockPredict/>}/>
        <Route path = '/research' element = {<Research/>}/>
        <Route path = '/coursework' element = {<Courses/>}/>
        <Route path = '/experience' element = {<Experience/>}/>
        <Route path = '/study-guide-311-3' element = {<StudyGuideViewer/>}/>

      </Routes> 
    </div>    
     
    
    </>
  )
}

export default App
