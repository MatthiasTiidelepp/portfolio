// const axios = require('axios')

// // URL for weather API
// // and API key for the weatherservice
// // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coordinates[0]}&lon=${city.coordinates[1]}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`
// const API_KEY = process.env.REACT_APP_API_KEY

// const getWeather = (lat, lng) => {
//   // Calling the countries API and populating cities array with capitals and country coordinates
//   // console.log('calling API', url)
//   axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`)
//     .then(response => {
//       console.log(response.data)
//       return response.data
//     })
// }

// module.exports = getWeather()