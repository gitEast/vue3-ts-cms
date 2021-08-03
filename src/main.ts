/*
 * @Author: East Wind
 * @Date: 2021-07-29 21:34:57
 * @LastEditTime: 2021-08-03 21:26:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\main.ts
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import { registerApp } from './global/index'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.use(registerApp)
app.mount('#app')
