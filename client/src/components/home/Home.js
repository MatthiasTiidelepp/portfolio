import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="introduction">
        <h1 className="introductionTitle">Welcome to my portfolio page</h1>
        <p className="introductionBody">The intention of this page is to demonstrate my software development skills.
          This page is made using the MERN stack and contains many small projects that I have made to learn and strengthen my web design skills.
        </p>
      </div>

      <div className="projects">
        {/* <p className="projectsTitle">Projects</p> */}
        <div className="projectLinks">
          <a className="projectLink" href="/weather">Weather</a>
          <a className="projectLink" href="/tictactoe">Tic Tac Toe</a>
          <a className="projectLink" href="/notes">Notes</a>
        </div>
      </div>
    </div>
  )
}

export default Home
