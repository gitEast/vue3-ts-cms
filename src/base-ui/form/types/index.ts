/*
 * @Author: your name
 * @Date: 2021-08-11 23:28:44
 * @LastEditTime: 2021-08-13 06:11:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\base-ui\form\types\index.ts
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[] // 针对 select
  otherOptions?: any // 针对特殊的属性
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}
