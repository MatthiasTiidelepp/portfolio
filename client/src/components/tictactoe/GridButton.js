import React from 'react'

const GridButton = ({ id, handleButton, cell }) => {
  return (
    <button className="gridBtn" id={id} onClick={handleButton}>
      {cell}
    </button>
  )
}

export default GridButton
