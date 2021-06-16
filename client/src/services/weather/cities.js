import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/cities'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const exp = { getAll }
export default exp