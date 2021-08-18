/*
 * @Author: East Wind
 * @Date: 2021-08-07 11:27:38
 * @LastEditTime: 2021-08-15 21:10:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\service\request\index.ts
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { EASTRequestConfig, EASTRequestInterceptors } from './type'

// Loading 引入
// import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = false

class EASTRequest {
  instance: AxiosInstance // 类实例
  interceptors?: EASTRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  /** 构造函数 */
  constructor(config: EASTRequestConfig) {
    this.instance = axios.create(config) // 构建 axios 的 instance

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 从 config 中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    /** 添加所有实例都有的拦截器 */
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例共同的--------请求成功的拦截')
        // if (this.showLoading) {
        //   // 使用 Loading
        //   this.loading = ElLoading.service({
        //     lock: true, // 遮罩层
        //     text: '正在请求数据中...', // 图标下的文字
        //     background: 'rgba(0, 0, 0, 0.5)'
        //   })
        // }
        return config
      },
      (err) => {
        // console.log('所有实例共同的--------请求失败的拦截')
        return err
      }
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例共同的--------响应成功的拦截')
        // setTimeout(() => {
        //   // 移除 loading
        //   this.loading?.close()
        // }, 1000)
        return res.data
      },
      (err) => {
        // console.log('所有实例共同的--------响应失败的拦截')
        // 移除 loading
        this.loading?.close()
        return err
      }
    )
  }

  request<T = any>(config: EASTRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个网络请求的拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个网络响应的拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T = any>(config: EASTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: EASTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: EASTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: EASTRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default EASTRequest
