/*
 * @Author: your name
 * @Date: 2021-08-09 06:12:43
 * @LastEditTime: 2021-08-10 20:19:04
 * @LastEditors: Please set LastEditors
 * @Description: 根模块数据类型
 * @FilePath: \vue3-ts-cms\src\store\type.ts
 */

import { ILoginState } from './login/type'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
