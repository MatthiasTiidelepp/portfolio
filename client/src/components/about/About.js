import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="introduction">
        <h1 className="introductionTitle">Welcome to my portfolio page</h1>
        <p className="introductionBody">
          My name is Matthias Tiidelepp and I am a self-taught software developer from Tartu.
          In 2020 I got my bachelor's degree in sculpture at Pallas University of Applied Sciences.
          Since January 2020 I have been learning how to program through various online courses.
          This website is made with knowledge I mostly got from University of Helsinki's course Full Stack Open 2021.
          It is made using React on the frontend, Node.js and Express on the server side and MongoDB as a database.
        </p>
      </div>

      <div className="projects">
        <div className="projectLinks">
          <a className="projectLink" href="/weather">Weather</a>
          <a className="projectLink" href="/tictactoe">Tic Tac Toe</a>
          <a className="projectLink" href="/notes">Notes</a>
        </div>
      </div>
    </div>
  )
}

export default About
