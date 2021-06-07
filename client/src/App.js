import React from 'react'
import './App.scss'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import Home from './components/home/Home'
import Weather from './components/weather/Weather'
import TicTacToe from './components/tictactoe/TicTacToe'
import Notes from './components/notes/Notes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="pageContainer">
      <Router>
        <div className="navBar">
          <Link className="navItem" to="/">Home</Link>
          <Link className="navItem" to="/weather">Weather</Link>
          <Link className="navItem" to="/tictactoe">Tic Tac Toe</Link>
          <Link className="navItem" to="/notes">Notes</Link>
        </div>
  
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/notes" component={Notes} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
  
      <Footer />
    </div>
  )
}

export default App