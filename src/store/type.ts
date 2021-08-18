/*
 * @Author: your name
 * @Date: 2021-08-09 06:12:43
 * @LastEditTime: 2021-08-15 20:47:10
 * @LastEditors: Please set LastEditors
 * @Description: 根模块数据类型
 * @FilePath: \vue3-ts-cms\src\store\type.ts
 */

import { ILoginState } from './login/type'
import { ISystemState } from './main/system/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
