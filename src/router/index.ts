/*
 * @Author: East Wind
 * @Date: 2021-07-31 10:13:54
 * @LastEditTime: 2021-07-31 11:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import type 表示声明一个类型，type 不加也没事
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
