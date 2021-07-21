import React from 'react'

const GridButton = ({ id, handleButton, cell }) => {
  return (
    <button className="gridButton" id={id} onClick={handleButton}>
      {cell}
    </button>
  )
}

export default GridButton
