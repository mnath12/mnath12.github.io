import { Box, Text, Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Sudoku from './Sudoku'
import Reversi from './Reversi'
import Research from './Research'


function Projects() {

  return (
    <Box w = 'calc(100vw)' h = 'calc(100vh)' >
      <Sidebar activeButton =""></Sidebar>
      
    </Box>
  )
}

export default Projects
