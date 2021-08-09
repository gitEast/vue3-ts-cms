/*
 * @Author: East Wind
 * @Date: 2021-08-07 11:25:53
 * @LastEditTime: 2021-08-10 00:04:40
 * @LastEditors: Please set LastEditors
 * @Description: service 统一出口
 * @FilePath: \vue3-ts-cms\src\service\index.ts
 */
import EASTRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const eastRequest = new EASTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 每个实例可以拥有自己的拦截器
    requestInterceptor: (config) => {
      // 携带 token 的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default eastRequest
