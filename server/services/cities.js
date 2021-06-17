const axios = require('axios')

// URL for european region countries
const url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'

// Calling the countries API and populating cities array with capitals and country coordinates
const getCities = async () => {
  console.log('calling API', url)
  const result = await axios.get(url)
  return result
}

module.exports = getCities