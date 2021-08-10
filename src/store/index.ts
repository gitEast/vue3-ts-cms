/*
 * @Author: East Wind
 * @Date: 2021-07-31 11:56:51
 * @LastEditTime: 2021-08-10 20:36:22
 * @LastEditors: Please set LastEditors
 * @Description: token userInfo userMenus 等数据保存
 * @FilePath: \vue3-ts-cms\src\store\index.ts
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'

// 类型导入
import { IRootState, IStoreType } from './type'

// 模块导入
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'East Wind',
      age: 22,
      height: ''
    }
  },
  mutations: {
    changeName(state) {
      console.log(state.name)
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore(): void {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
