/*
 * @Author: your name
 * @Date: 2021-08-15 20:42:31
 * @LastEditTime: 2021-08-18 23:34:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\store\main\system\system.ts
 */
import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

// const pageUrlMap = {
//   users: '/api/users/abc/list'
// }

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1. 获取 pageUrl
      const pageName = payload.pageName
      // let pageUrl = pageUrlMap[pageName]
      // let pageUrl = ''
      const pageUrl = `${pageName}/list`
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      //   default:
      //     break
      // }
      console.log(pageUrl)
      // 1. 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 将数据存储到 State 中
      const { list, totalCount } = pageResult.data
      console.log(list)
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  }
}

export default systemModule
