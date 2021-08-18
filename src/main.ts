/*
 * @Author: East Wind
 * @Date: 2021-07-29 21:34:57
 * @LastEditTime: 2021-08-16 22:42:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\main.ts
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import { registerApp } from './global/index'

// CSS
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

// // 使用 axios_demo.ts
// import './service/axios_demo'
// import eastRequest from './service'

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// eastRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('单独请求的config')
//         return config
//       },
//       responseInterceptor: (res) => {
//         console.log('单独响应的res')
//         return res
//       }
//     },
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res)
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

// setTimeout(() => {
//   eastRequest.request({
//     url: '/home/multidata',
//     method: 'GET',
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('单独请求的config')
//         return config
//       },
//       responseInterceptor: (res) => {
//         console.log('单独响应的res')
//         return res
//       }
//     },
//     showLoading: false
//   })
// }, 2000)

const app = createApp(App)

setupStore()
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.use(registerApp)
app.mount('#app')
