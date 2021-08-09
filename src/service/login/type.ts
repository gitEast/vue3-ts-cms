/*
 * @Author: your name
 * @Date: 2021-08-09 21:01:15
 * @LastEditTime: 2021-08-09 21:58:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\service\login\type.ts
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
