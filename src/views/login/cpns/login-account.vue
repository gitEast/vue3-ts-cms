<!--
 * @Author: East Wind
 * @Date: 2021-08-08 16:06:28
 * @LastEditTime: 2021-08-08 23:30:35
 * @LastEditors: Please set LastEditors
 * @Description: 账号登录
 * @FilePath: \vue3-ts-cms\src\views\login\cpns\login-account.vue
-->
<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
import localCache from '../../../utils/cache'

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存：sessionStorage, localStorage
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2. 开始进入登录验证
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
