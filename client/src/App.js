import React from 'react'
import './App.scss'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"


import About from './components/about/About'
import Weather from './components/weather/Weather'
import TicTacToe from './components/tictactoe/TicTacToe'
import Notes from './components/notes/Notes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="page">
      <div className="content">
        <Router>
          <div className="navBar">
            <div className="pageTitleContainer">
              <a className="pageTitle" href="/">MATTHIAS TIIDELEPP</a>
            </div>
  
            <div className="navItems">
              <Link className="navItem" to="/">ABOUT</Link>
              <Link className="navItem" to="/weather">WEATHER</Link>
              <Link className="navItem" to="/tictactoe">TIC TAC TOE</Link>
              <Link className="navItem" to="/notes">NOTES</Link>
            </div>
          </div>
    
          <Switch>
            <Route path="/weather" component={Weather} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/notes" component={Notes} />
            <Route path="/" component={About} />
          </Switch>
        </Router>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default App