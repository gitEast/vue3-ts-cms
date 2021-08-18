/*
 * @Author: your name
 * @Date: 2021-08-18 01:12:20
 * @LastEditTime: 2021-08-18 01:13:11
 * @LastEditors: Please set LastEditors
 * @Description: 表格的 config
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\config\content.config.ts
 */
export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '用户名', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
