const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Note = require('./models/note')
const morgan = require('morgan')

app.use(cors())
app.use(express.json())

// HTTP request logger
app.use(morgan('tiny'))

const errorHandler = (error, request, response, next) => {
  
}

app.get('/', (req, res) => {
  res.send('<h1>Hello Worldsss!</h1>')
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes)
  })
})

app.post('/api/notes', (req, res) => {
  const body = req.body

  const note = new Note({
    title: body.title,
    body: body.body
  })

  note.save().then(savedNote => {
    res.json(savedNote)
  })
})

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id

  Note.findById(id).then(note => {
    res.json(note)
  })
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id

  Note.findByIdAndRemove(id)
    .then(note => {
      res.json(note)
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})