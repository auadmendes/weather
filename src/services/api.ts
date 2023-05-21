//API_KEY= fb91d23c-f646-11ed-a654-0242ac130002-fb91d2aa-f646-11ed-a654-0242ac130002
//4ba806333269493cbf1142537231905
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1'
})

export default api;