/*
 * @Author: East Wind
 * @Date: 2021-08-07 21:22:35
 * @LastEditTime: 2021-08-08 09:46:08
 * @LastEditors: Please set LastEditors
 * @Description: axios 类型重新封装
 * @FilePath: \vue3-ts-cms\src\service\request\type.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器
export interface EASTRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

// config
export interface EASTRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: EASTRequestInterceptors<T>
  showLoading?: boolean
}
