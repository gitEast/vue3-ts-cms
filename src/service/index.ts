/*
 * @Author: East Wind
 * @Date: 2021-08-07 11:25:53
 * @LastEditTime: 2021-08-08 08:34:53
 * @LastEditors: Please set LastEditors
 * @Description: service 统一出口
 * @FilePath: \vue3-ts-cms\src\service\index.ts
 */
import EASTRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const eastRequest = new EASTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 每个实例可以拥有自己的拦截器
    requestInterceptor: (config) => {
      console.log('携带token')
      const token = `East Wind's token`
      if (token) {
        config.headers.Authorization = `Bear ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('每个实例自己的--------请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('每个实例自己的--------响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('每个实例自己的--------响应失败的拦截')
      return err
    }
  }
})

export default eastRequest
