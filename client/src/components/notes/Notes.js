import React, {useState, useEffect} from 'react'
import noteService from '../../services/notes'
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const noteObject = {
      title: newTitle,
      body: newBody
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewTitle('')
        setNewBody('')
      })
  }

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleBodyChange = (e) => {
    setNewBody(e.target.value)
  }

  const handleDelete = (id) => {
    noteService
      .remove(id)
      .then(returnedNote => {
        setNotes(notes.filter(note => note.id !== id))
        window.alert(`Deleted "${returnedNote.title}"`)
      })
  }

  return (
    <div className="notesContainer">
      {!notes ?
          null :
          <form className="notesForm" onSubmit={handleFormSubmit}>
            <div className="titleContainer">
              <label className="titleLabel">Title:</label>
              <input
                className="titleInput"
                type="text"
                name="title"
                value={newTitle}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="bodyContainer">
              <label className="bodyLabel">Content:</label>
              <textarea
                className="bodyInput"
                name="body"
                rows="5"
                cols="33"
                value={newBody}
                onChange={handleBodyChange}
                required
              />
            </div>
            <div className="buttonContainer">
              <button className="submitButton" type="submit">Submit</button>
            </div>
          </form>
      }
      <ul className="notelistContainer">
        {!notes ?
          null :
          notes.map(n => 
            <Note
              key={n.id}
              note={n}
              handleDelete={() => handleDelete(n.id)}
            />
          )
        }
      </ul>
    </div>
  )
}

export default Notes