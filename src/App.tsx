import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import NavBar from './components/NavBar'
import { HStack, Box, Flex } from '@chakra-ui/react'
import { Container, Center, Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Heading, Divider, Button, ButtonGroup  } from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Sudoku from './pages/Sudoku'
import Research from './pages/Research'
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
