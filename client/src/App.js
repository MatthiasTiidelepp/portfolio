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
    <div className="page">
      <Router>
        <div className="navBar">

          <a className="pageTitle" href="/">Matthias Tiidelepp</a>
          
          {/* <ul className="navItems">
            <li className="navItem">HOME</li>
            <li className="navItem">WEATHER</li>
            <li className="navItem">TICTACTOE</li>
            <li className="navItem">NOTES</li>
          </ul> */}

          <div className="navItems">
            <Link className="navItem" to="/">HOME</Link>
            <Link className="navItem" to="/weather">WEATHER</Link>
            <Link className="navItem" to="/tictactoe">TIC TAC TOE</Link>
            <Link className="navItem" to="/notes">NOTES</Link>
          </div>
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