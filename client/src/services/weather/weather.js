import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/weather'

const getAll = (lat, lng) => {
  const req = axios
    .get(
      baseUrl, {
        params: {
          lat: lat,
          lng: lng
        }
      }
    )
  return req.then(res => res.data)
}

const exp = { getAll }
export default exp