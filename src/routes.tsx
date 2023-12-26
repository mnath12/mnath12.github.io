import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch } from '@chakra-ui/react'
import App from './App'
import Projects from './pages/Projects'

import { BrowserRouter as Router, Route} from 'react-router-dom'

export const routes = () => {
    return (
            <Router>
                <Switch>
                    <Route path = '/'>
                        <App />
                    </Route>
                    <Route path = '/pages/projects'>
                        <Projects />
                    </Route>
                </Switch>
            </Router>
    )
}






