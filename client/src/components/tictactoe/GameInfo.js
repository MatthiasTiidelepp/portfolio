import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { MdRefresh } from 'react-icons/md';

function GameInfo({ handleRestart, current, finished }) {
  return (
    <div className="infoContainer">
      <button className="restartBtn" onClick={handleRestart}><MdRefresh /></button>
      {finished ?
        null
        : <p className="current">
            {current === 'x' ? <MdClose /> : <MdRadioButtonUnchecked />}
          </p>
      }
    </div>
  )
}

export default GameInfo