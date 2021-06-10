const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

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

// Changing the format of the notes sent to frontend
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)