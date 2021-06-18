const axios = require('axios')

// API key for the weatherservice
const API_KEY = process.env.REACT_APP_API_KEY

// Function for calling the weather API for weather conditions based on the coordinates that were passed in
const getWeather = async (lat, lng) => {
  console.log('calling weather API')
  return await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`)
}

module.exports = getWeather