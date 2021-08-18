/*
 * @Author: your name
 * @Date: 2021-08-09 06:08:08
 * @LastEditTime: 2021-08-12 21:42:35
 * @LastEditors: Please set LastEditors
 * @Description: 登录的 vuex 使用
 * @FilePath: \vue3-ts-cms\src\store\login\login.ts
 */
import { Module } from 'vuex'

import { ILoginState } from './type'
import { IRootState } from '../type'
import { IAccount } from '@/service/login/type'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'

import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

// Module<当前模块 state 类型，根模块 state 类型>
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)

      // 将 routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 请求用户信息的数据
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3. 获取菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4. 跳转到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行 phoneLoginAction', payload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (token) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
