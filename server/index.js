require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())

const url = process.env.MONGODB_URI

// Connection to the database for note
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(res => {
    console.log('connected to MongoDB')
  }).catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

// Creating a schema for a note
const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now()
  },
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   title: 'No "Numero Dres" Te',
//   body: 'Ay Caramba!!! AYAYAYAYA'
// })

// note.save().then(res => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// HTTP request logger
app.use(morgan('tiny'))

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

  console.log(body)

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

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})