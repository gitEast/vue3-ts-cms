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
      field: 'id',
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      rules: [],
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      rules: [],
      placeholder: '请输入权限介绍'
    }
  ]
}
