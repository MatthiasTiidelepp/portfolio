import React from 'react'

const Note = ({ note, handleDelete }) => {

  return (
    <div>
        <li className="noteContainer">
          <div className="noteTextContainer">
            <h1 className="noteTitle">{note.title}</h1>
            <p className="noteBody">{note.body}</p>
          </div>
          <button className="noteDeleteButton" onClick={handleDelete}>Delete</button>
        </li>
        <hr />
    </div>
  )
}

export default Note
