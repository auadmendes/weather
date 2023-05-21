import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Home } from './pages/home/home'
import { About } from './pages/about/about'

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </Router>
  )
}