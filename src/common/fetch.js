import axios from 'axios'

const RequestBaseUrl = process.env.NODE_ENV === 'development' ? process.env.BASE_API : window.Utopa.SysConfig.BASE_API

const service = axios.create({
  baseURL: RequestBaseUrl,
  timeout: 16000
})

service.interceptors.request.use(config => {
  // setHeader()
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(({data}) => {
  return data
}, error => {
  return Promise.reject(error)
})

service.getRequestUrl = (url) => {
  const baseURL = RequestBaseUrl
  return baseURL + url
}

export default service
