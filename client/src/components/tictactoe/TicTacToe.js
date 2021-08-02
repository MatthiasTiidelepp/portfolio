import React, { useState } from 'react'
import Grid from './Grid'
import GameInfo from './GameInfo'

import { MdRadioButtonUnchecked } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

function TicTacToe() {
  // State for current symbol
  const [current, setCurrent] = useState('x')
  // State for the grid and values it contains
  const [cells, setCells] = useState([{1: '', 2: '',3: ''}, {4: '', 5: '', 6: ''}, {7: '', 8: '', 9: ''}])
  // A grid state for checking the victory conditions
  const [grid, setGrid] = useState([{1: '', 2: '',3: ''}, {4: '', 5: '', 6: ''}, {7: '', 8: '', 9: ''}])
  // State for checking if the board is full (9) without meeting any victory condition, which means a draw
  const [full, setFull] = useState(1)
  // State for checking if a victory or draw condition has been met
  const [finished, setFinished] = useState(false)
  // State for which symbol won or draw
  const [conclusion, setConclusion] = useState('')

  const handleRestart = () => {
    setCurrent('x')
    setCells([{1: '', 2: '',3: ''}, {4: '', 5: '', 6: ''}, {7: '', 8: '', 9: ''}])
    setGrid([{1: '', 2: '',3: ''}, {4: '', 5: '', 6: ''}, {7: '', 8: '', 9: ''}])

    setFull(1)
    setFinished(false)
    setConclusion('')
  }

  const handleButton = (e) => {
    let id = e.target.id
    let cellsArr = cells
    let gridArr = grid
    let cross = <MdClose />
    let circle = <MdRadioButtonUnchecked />
    
    // Change clicked button's text (to 'x' or 'o'), based on the currently active letter
    if (id === '1' || id === '2' || id === '3') {

      if (cells[0][`${id}`] === '') {
        cellsArr[0][`${id}`] = (current === 'x' ? cross : circle)
        gridArr[0][`${id}`] = current
        current === 'x' ? setCurrent('o') : setCurrent('x')
        setFull(full + 1)
      } else {
        cellsArr = cells
      }
    } else if (id === '4' || id === '5' || id === '6') {
      
      if (cells[1][`${id}`] === '') {
        cellsArr[1][`${id}`] = (current === 'x' ? cross : circle)
        gridArr[1][`${id}`] = current
        current === 'x' ? setCurrent('o') : setCurrent('x')
        setFull(full + 1)
      } else {
        cellsArr = cells
      }
    } else {

      if (cells[2][`${id}`] === '') {
        cellsArr[2][`${id}`] = (current === 'x' ? cross : circle)
        gridArr[2][`${id}`] = current
        current === 'x' ? setCurrent('o') : setCurrent('x')
        setFull(full + 1)
      } else {
        cellsArr = cells
      }
    }
    
    setCells(cellsArr)
    
    // Check if victory or draw condition is met and end the game if necessary
    if (
      // Conditions for rows
      (grid[0]['1'] === 'x' &&
      grid[0]['2'] === 'x' &&
      grid[0]['3'] === 'x')
      ||
      (grid[0]['1'] === 'o' &&
      grid[0]['2'] === 'o' &&
      grid[0]['3'] === 'o')
      ||
      (grid[1]['4'] === 'x' &&
      grid[1]['5'] === 'x' &&
      grid[1]['6'] === 'x')
      ||
      (grid[1]['4'] === 'o' &&
      grid[1]['5'] === 'o' &&
      grid[1]['6'] === 'o')
      ||
      (grid[2]['7'] === 'x' &&
      grid[2]['8'] === 'x' &&
      grid[2]['9'] === 'x')
      ||
      (grid[2]['7'] === 'o' &&
      grid[2]['8'] === 'o' &&
      grid[2]['9'] === 'o')

      ||

      // Conditions for columns
      (grid[0]['1'] === 'x' &&
      grid[1]['4'] === 'x' &&
      grid[2]['7'] === 'x')
      ||
      (grid[0]['1'] === 'o' &&
      grid[1]['4'] === 'o' &&
      grid[2]['7'] === 'o')
      ||
      (grid[0]['2'] === 'x' &&
      grid[1]['5'] === 'x' &&
      grid[2]['8'] === 'x')
      ||
      (grid[0]['2'] === 'o' &&
      grid[1]['5'] === 'o' &&
      grid[2]['8'] === 'o')
      ||
      (grid[0]['3'] === 'x' &&
      grid[1]['6'] === 'x' &&
      grid[2]['9'] === 'x')
      ||
      (grid[0]['3'] === 'o' &&
      grid[1]['6'] === 'o' &&
      grid[2]['9'] === 'o')
      
      ||

      // Conditions for diagonals
      (grid[0]['1'] === 'x' &&
      grid[1]['5'] === 'x' &&
      grid[2]['9'] === 'x')
      ||
      (grid[0]['1'] === 'o' &&
      grid[1]['5'] === 'o' &&
      grid[2]['9'] === 'o')
      ||
      (grid[0]['3'] === 'x' &&
      grid[1]['5'] === 'x' &&
      grid[2]['7'] === 'x')
      ||
      (grid[0]['3'] === 'o' &&
      grid[1]['5'] === 'o' &&
      grid[2]['7'] === 'o')
    ) {
      if (current === 'x') {
        setFinished(true)
        setConclusion('X wins!')
        // window.alert('x wins!')
        // handleRestart()

      } else {
        setFinished(true)
        setConclusion('O wins!')
        // window.alert('o wins!')
        // handleRestart()
      }
    // Condition for draw (board full without victory condition)
    } else if (full === 9) {
      setFinished(true)
      setConclusion('Draw!')
      // window.alert('Draw!')
      // handleRestart()
    }
  }

  return (
      <div className="tictactoe">
        <GameInfo
          handleRestart={handleRestart}
          current={current}
          finished={finished}
        />
  
        <Grid
          finished={finished}
          conclusion={conclusion}
          handleButton={handleButton}
          cells={cells}
        />
      </div>
  );
}

export default TicTacToe;
