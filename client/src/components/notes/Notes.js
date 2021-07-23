import React, {useState, useEffect} from 'react'
import noteService from '../../services/notes/notes'
import Note from './Note';
import NoteForm from './NoteForm';

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
      .then(() => {
        // window.alert(`Deleted "${notes.find(note => note.id === id).title}"`)
        setNotes(notes.filter(note => note.id !== id))
      })
  }

  return (
    <div className="notes">
      
      {!notes ?
        null :
        <NoteForm
          handleFormSubmit={handleFormSubmit}
          newTitle={newTitle}
          handleTitleChange={handleTitleChange}
          newBody={newBody}
          handleBodyChange={handleBodyChange}
        />
      }

      <ul className="noteList">
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