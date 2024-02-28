import axios, { AxiosError, HttpStatusCode } from 'axios'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'

const prefixUrl: string = import.meta.env.VITE_API_CONTEXT_PATH

const Logger = (message: string) => {
  if (import.meta.env.MODE === 'development')
    console.log(message)
}

const requestTimeout = (error: Error | AxiosError) => {
  Logger('요청 시간 초과')
  return error
}
const request = axios.create({
  baseURL: `${prefixUrl}`,
})

request.defaults.timeout = import.meta.env.VITE_REQUEST_TIMEOUT
request.interceptors.request.use(
  (config) => {
    if (config.params) {
      for (const i of Object.keys(config.params)) {
        if (isEmpty(config.params[i]))
          delete config.params[i]
      }
    }
    NProgress.start()
    return config
  },
  (error) => {
    NProgress.done()
    Logger(error)
    return Promise.reject(error)
  },
)
request.interceptors.response.use(
  (response) => {
    NProgress.done()
    Logger(response.data)
    if (response.config.responseType === 'arraybuffer' || response.config.responseType === 'blob')
      return response
    else
      return response.data
  },
  async (error) => {
    NProgress.done()
    Logger(error)
    if (error.code === AxiosError.ECONNABORTED || error.code === AxiosError.ETIMEDOUT) {
      return requestTimeout(error)
    }

    else if (error.response.status) {
      if (error.response.status === HttpStatusCode.ServiceUnavailable)
        Logger('서버가 배포중인가 봅니다.')

      ElMessage.error(error.response.data.SERVER_MESSAGE.errorMessage)
      return Promise.reject(error.response)
    }
    else {
      Logger('이건 정의된게 없어요. 추가해주세요.')
      return Promise.reject(error)
    }
  },
)

export default request
