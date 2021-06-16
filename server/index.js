const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Note = require('./models/note')
const cities = require('./services/cities')
const getWeather = require('./services/weather')
const morgan = require('morgan')

const axios = require('axios')

app.use(cors())
app.use(express.json())

// HTTP request logger
app.use(morgan('tiny'))

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.get('/', (request, response) => {
  response.send('<h1>Hello Worlds!</h1>')
})

// Routes for notes component
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  const note = new Note({
    title: body.title,
    body: body.body
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if(note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response) => {
  Note.findByIdAndRemove(request.params.id)
    .then(note => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Routes for weather component (European capital cities and weather for those cities)
app.get('/api/cities', (request, response) => {
  if (cities.length > 0) {
    response.json(cities)
  } else {
    response.status(404).send({ error: 'received no data from cities module' })
  }
})

// app.get('/api/weather', (request, response) => {
//   // console.log(request.query)
//   const lat = request.query.lat
//   const lng = request.query.lng
//   console.log(getWeather(lat, lng))
//   response.send('<h1>Whats</h1>')
//   // response.json(getWeather(lat, lng))
// })

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})