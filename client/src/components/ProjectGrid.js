import React from 'react'

const ProjectGrid = () => {
  return (
    <div className="gridContainer">
      <div className="gridCell">
        <button className="cellBtn">Weather</button>
      </div>
      <div className="gridCell">
        <button className="cellBtn">Tic Tac Toe</button>
      </div>
      <div className="gridCell">
        <button className="cellBtn">Notes</button>
      </div>
      <div className="gridCell">
        <button className="cellBtn">To Do List</button>
      </div>
    </div>
  )
}

export default ProjectGrid
