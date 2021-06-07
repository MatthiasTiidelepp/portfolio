import React, {useState} from 'react'

const Notes = () => {
  const [notes, setNotes] = useState([{title: 'first note', body: 'This is the note that was writte first'}, {title: '2nd note', body: 'This is the note secondly writeeeen'},{title: 'The usefulness of nonsensical content', body:'Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.'}])
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const noteObject = {
      title: newTitle,
      body: newBody
    }

    setNotes(notes.concat(noteObject))
    setNewTitle('')
    setNewBody('')
  }

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleBodyChange = (e) => {
    setNewBody(e.target.value)
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
              <li className="noteContainer" key={n.title}>
                <h1 className="noteTitle">{n.title}</h1>
                <p className="noteBody">{n.body}</p>
                <hr />
              </li>
            )})
        }
      </ul>
    </div>
  )
}

export default Notes