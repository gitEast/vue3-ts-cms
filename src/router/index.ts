/*
 * @Author: East Wind
 * @Date: 2021-07-31 10:13:54
 * @LastEditTime: 2021-08-10 00:30:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import type 表示声明一个类型，type 不加也没事
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
