import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
})

const request = (config: any) => {
  return config
}

const requestError = (error: any) => {
  console.log(error)
  return Promise.reject(error)
}

const response = (response: any) => {

  return response.data
}

const responseError = (error: any) => {
  if (error.message && error.message.indexOf('timeout') !== -1) {
    console.error('请求超时')
    return
  }
  if (error.response.status === 500) {
    // 没有权限
    console.error('接口异常')
    return Promise.reject(error)
  }
  return Promise.reject(error)
}

service.interceptors.request.use(request, requestError)
service.interceptors.response.use(response, responseError)

export default service