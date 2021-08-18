/*
 * @Author: your name
 * @Date: 2021-08-09 21:01:15
 * @LastEditTime: 2021-08-15 21:11:41
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
