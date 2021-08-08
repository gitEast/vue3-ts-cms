/*
 * @Author: East Wind
 * @Date: 2021-08-07 09:32:36
 * @LastEditTime: 2021-08-07 10:16:08
 * @LastEditors: Please set LastEditors
 * @Description: axios 的模拟与介绍
 * @FilePath: \vue3-ts-cms\src\service\axios_demo.ts
 */

// 1. 导入 axios
import axios from 'axios'

/** axios 的实例对象 */
/*
axios.request({
   method: 'GET'
 })
// 等价于
axios.get({})
*/

// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

// axios.get('http://httpbin.org/get').then((res) => {
//   console.log(res)
// })

// 2. axios 的配置
// // 2.1 全局配置
// axios.defaults.baseURL = 'http://httpbin.org/'
// axios.defaults.timeout = 10000
// // axios.defaults.headers = {}
// axios.get('/get').then((res) => {
//   console.log(res)
// })
// // 2.2 单个选项
// axios
//   .get('/get', {
//     params: {
//       name: 'east wind'
//     },
//     timeout: 3000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res)
//   })

// // 5. axios.all 多个请求，一起返回
// axios.defaults.baseURL = 'http://httpbin.org/'
// axios
//   .all([
//     axios.get('/get', { params: { name: 'east wind' } }),
//     axios.post('/post', { data: { name: 'east wind', age: 22 } })
//   ])
//   .then((res) => {
//     console.log(res[0])
//     console.log(res[1])
//   })

// 6. axios 的拦截器，fn1 成功函数，fn2 失败函数
axios.interceptors.request.use(
  (config) => {
    console.log('发送请求成功的拦截')
    return config
  },
  (err) => {
    console.log('发送请求失败的拦截')
    return err
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log('响应返回成功的拦截')
    return res
  },
  (err) => {
    console.log('响应返回失败的拦截')
    return err
  }
)
