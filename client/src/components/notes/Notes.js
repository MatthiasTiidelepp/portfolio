import React, {useState, useEffect} from 'react'
import noteService from '../../services/notes'

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
    console.log(`Delete ${id} now!`)
  }

  return (
    <div className="notesContainer">
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


      <ul className="notelistContainer">
        {!notes ?
          null :
          notes.map(n => {
            return (
              <li className="noteContainer" key={n.id}>
                
                <div className="noteTextContainer">
                  <h1 className="noteTitle">{n.title}</h1>
                  <p className="noteBody">{n.body}</p>
                </div>
                <button className="noteDeleteButton" onClick={handleDelete(n.id)}>Delete</button>
                <hr />
              </li>
            )})
        }
      </ul>
    </div>
  )
}

export default Notes