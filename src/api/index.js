import axios from 'axios'

const api = axios.create({
  baseURL: 'http://35.228.12.80:9090/',
  timeout: 3000
})

export default api
