/*
 * @Author: your name
 * @Date: 2021-08-15 21:00:55
 * @LastEditTime: 2021-08-15 21:12:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\service\main\system\system.ts
 */
import eastRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return eastRequest.post<IDataType>({
    url: url,
    params: queryInfo
  })
}
