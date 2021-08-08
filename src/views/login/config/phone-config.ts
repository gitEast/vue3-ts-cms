/*
 * @Author: your name
 * @Date: 2021-08-08 18:15:08
 * @LastEditTime: 2021-08-08 18:18:55
 * @LastEditors: Please set LastEditors
 * @Description: 手机号与验证码的校验规则
 * @FilePath: \vue3-ts-cms\src\views\login\config\phone-config.ts
 */
export const rules = {
  phone: [
    { required: true, message: '手机号不得为空', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码不得为空', trigger: 'blur' },
    {
      pattern: /^[0-9]{5}/,
      message: '验证码格式不正确',
      trigger: 'blur'
    }
  ]
}
