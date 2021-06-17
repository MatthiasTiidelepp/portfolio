const axios = require('axios')

// and API key for the weatherservice
const API_KEY = process.env.REACT_APP_API_KEY

const getWeather = async (lat, lng) => {
  // Calling the countries API and populating cities array with capitals and country coordinates
  console.log('calling weather API')
  const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`)

  return result
}

module.exports = getWeather