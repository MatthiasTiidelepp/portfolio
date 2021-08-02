import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="introduction">
        <h1 className="introductionTitle">Welcome to my page</h1>
        <p className="introductionBody">
          My name is Matthias Tiidelepp and I am a self-taught software developer from Tartu.
          In 2020 I got my bachelor's degree in sculpture at Pallas University of Applied Sciences.
          I learned a lot of practical skills there and found blacksmithing as one of my main hobbies.
          <br />
          <br />
          I also studied 3D modelling (Blender) and 2D graphic design (Illustrator, Photoshop).
          This sparked an interest in design in general. Since I already had an interest and familiarity with computers
          software design was a good specialty to immerse myself in.
          <br />
          <br />
          In January 2020 I started teaching myself how to program through various online courses.
          I learned the basics of a few different programming languages like C#, Python, PHP, and Java and tried my hand at making a some small practice projects
          but ultimately landed on website design with React and Node.js.
          <br />
          <br />
          This portfolio website is my first go at making a full website from scratch.
          It is at the same time a product that I need to demonstrate my skills and a learning project.
          If you wish to see see my other projects or the code for this site, feel free to visit my <a className="introductionLink" href="https://github.com/MatthiasTiidelepp">GitHub page</a>.
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
