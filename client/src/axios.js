import Axios from 'axios'
import Config from './config'

const axios = Axios.create({
  baseURL: Config.API_URL,
  headers: { 'X-Custom-Header': 'foobar' },
  timeout: 3000
})

export default axios