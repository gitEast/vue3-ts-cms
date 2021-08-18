/*
 * @Author: your name
 * @Date: 2021-08-12 21:15:59
 * @LastEditTime: 2021-08-13 06:27:36
 * @LastEditors: Please set LastEditors
 * @Description: user 页面搜索框配置文件
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\config\search.config.ts
 */
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      rules: [],
      placeholder: '请选择喜欢的运动',
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
