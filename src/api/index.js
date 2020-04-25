import axios from 'axios'

const api = axios.create({
  baseURL: 'http://64.225.116.180:9090/',
  timeout: 5000
})

export default api
