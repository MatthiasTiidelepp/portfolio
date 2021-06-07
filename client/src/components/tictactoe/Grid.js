import React from 'react'

const TicTacToe = ({ handleButton, cells }) => {
  return (
    <div className="cellContainer">
      <div>
        <button className="gridBtn" id="1" onClick={handleButton}>{cells[0]['1']}</button>
      </div>
      <div>
        <button className="gridBtn" id="2" onClick={handleButton}>{cells[0]['2']}</button>
      </div>
      <div>
        <button className="gridBtn" id="3" onClick={handleButton}>{cells[0]['3']}</button>
      </div>

      <div>
        <button className="gridBtn" id="4" onClick={handleButton}>{cells[1]['4']}</button>
      </div>
      <div>
        <button className="gridBtn" id="5" onClick={handleButton}>{cells[1]['5']}</button>
      </div>
      <div>
        <button className="gridBtn" id="6" onClick={handleButton}>{cells[1]['6']}</button>
      </div>

      <div>
        <button className="gridBtn" id="7" onClick={handleButton}>{cells[2]['7']}</button>
      </div>
      <div>
        <button className="gridBtn" id="8" onClick={handleButton}>{cells[2]['8']}</button>
      </div>
      <div>
        <button className="gridBtn" id="9" onClick={handleButton}>{cells[2]['9']}</button>
      </div>
    </div>
  )
}

export default TicTacToe
