const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Note = require('./models/note')
const getCities = require('./services/cities')
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
  // Calling imported cities function
  getCities()
    .then(result => {
      // Mapping cities capitals and coordinates to an array and responding with that to the request
      response.json(result.data.map(country => {
        return (
          {
          'capital': country.capital,
          'coordinates': country.latlng
          }
        )
      }))
    })
})

app.get('/api/weather', (request, response) => {
  // If coordinates 
  if (request.query.lat !== undefined && request.query.lng !== undefined) {
    const lat = request.query.lat
    const lng = request.query.lng

    getWeather(lat, lng)
      .then(result => {
        response.json(result.data)
      })
  } else {
    response.status(404).send({ error: 'no coordinates passed in' })
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})