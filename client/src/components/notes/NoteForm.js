import React from 'react'

const NoteForm = ({ handleFormSubmit, newTitle, handleTitleChange, newBody, handleBodyChange }) => {
  return (
    <form className="notesForm" onSubmit={handleFormSubmit}>
      <div className="title">
        <label className="titleLabel">Title</label>
        <input
          className="titleInput"
          type="text"
          name="title"
          value={newTitle}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="body">
        <label className="bodyLabel">Content</label>
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
  )
}

export default NoteForm
