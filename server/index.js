require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

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
  content: String,
  date: {
    type: String,
    default: Date.now()
  },
})

const Note = mongoose.model('Note', noteSchema)


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