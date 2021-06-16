const axios = require('axios')

// URL for european region countries
// and an empty array for the capital cities
const url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'
let cities = []

// Calling the countries API and populating cities array with capitals and country coordinates
console.log('calling API', url)
axios.get(url)
  .then(response => {
    response.data.forEach(country => {
      cities.push({
        'capital': country.capital,
        'coordinates': country.latlng
      })
    })
  })

module.exports = cities