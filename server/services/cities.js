const axios = require('axios')

// URL for european region countries
const url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'

// Function for calling the countries API for their capitals and coordinates
const getCities = async () => {
  console.log('calling cities API', url)
  return await axios.get(url)
}

module.exports = getCities