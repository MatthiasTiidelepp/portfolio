import React from 'react'
import GridButton from './GridButton'

const TicTacToe = ({ finished, conclusion, handleButton, cells }) => {
  return (
    <div className="gridContainer">
      {finished ?
        
        <div className="gameConclusionContainer">
          <p className="gameConclusionText">{conclusion}</p>
        </div> :

        <div className="cellContainer">
          <GridButton id="1" handleButton={handleButton} cell={cells[0]['1']} />
          <GridButton id="2" handleButton={handleButton} cell={cells[0]['2']} />
          <GridButton id="3" handleButton={handleButton} cell={cells[0]['3']} />

          <GridButton id="4" handleButton={handleButton} cell={cells[1]['4']} />
          <GridButton id="5" handleButton={handleButton} cell={cells[1]['5']} />
          <GridButton id="6" handleButton={handleButton} cell={cells[1]['6']} />

          <GridButton id="7" handleButton={handleButton} cell={cells[2]['7']} />
          <GridButton id="8" handleButton={handleButton} cell={cells[2]['8']} />
          <GridButton id="9" handleButton={handleButton} cell={cells[2]['9']} />
        </div>
      }
    </div>
  )
}

export default TicTacToe
