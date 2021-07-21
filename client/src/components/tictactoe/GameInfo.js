import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { MdRefresh } from 'react-icons/md';

function GameInfo({ handleRestart, current, finished }) {
  return (
    <div className="gameInfo">
      <button className="restartButton" onClick={handleRestart}><MdRefresh className="restartIcon" /></button>
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