/*
 * @Author: your name
 * @Date: 2021-08-18 01:12:20
 * @LastEditTime: 2021-08-18 23:22:32
 * @LastEditors: Please set LastEditors
 * @Description: 表格的 config
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\config\content.config.ts
 */
export const contentTableConfig = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
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
