/*
 * @Author: East Wind
 * @Date: 2021-07-31 10:13:54
 * @LastEditTime: 2021-08-11 23:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import type 表示声明一个类型，type 不加也没事
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import store from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/main.vue')
    // children: [] -> 根据 userMenus 来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
    // userMenus => routes
    const userMenus = (store.state as any).login.userMenus
    const routes = mapMenusToRoutes(userMenus)

    // 将 routes => router.main.children
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
  }
})

export default router
