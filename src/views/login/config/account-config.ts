/*
 * @Author: your name
 * @Date: 2021-08-08 16:48:35
 * @LastEditTime: 2021-08-08 16:49:09
 * @LastEditors: Please set LastEditors
 * @Description: 账号与密码的校验规则
 * @FilePath: \vue3-ts-cms\src\views\login\config\account-config.ts
 */
export const rules = {
  name: [
    { required: true, message: '账号是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}/,
      message: '账号必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}/,
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
