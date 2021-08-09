/*
 * @Author: your name
 * @Date: 2021-08-09 21:00:15
 * @LastEditTime: 2021-08-10 00:12:51
 * @LastEditors: Please set LastEditors
 * @Description: 登录的网络请求
 * @FilePath: \vue3-ts-cms\src\service\login\login.ts
 */

import eastRequest from '..'

import { IAccount, IDataType, ILoginResult } from './type'

// 枚举 API，防止网络请求改变路径
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法：/users/id
  UserMenus = '/role/' // 用法：/role/id/menu
}

// 登录
export function accountLoginRequest(account: IAccount) {
  return eastRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 获取用户信息
export function requestUserInfoById(id: number) {
  return eastRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

// 获取菜单
export function requestUserMenusByRoleId(id: number) {
  return eastRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
