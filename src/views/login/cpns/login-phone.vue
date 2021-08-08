<!--
 * @Author: your name
 * @Date: 2021-08-08 16:06:37
 * @LastEditTime: 2021-08-08 19:57:23
 * @LastEditors: Please set LastEditors
 * @Description: 手机号登录
 * @FilePath: \vue3-ts-cms\src\views\login\cpns\login-phone.vue
-->
<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code-part">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    // let btnEnable = false

    // // 获取验证码 按钮
    // const getCode = () => {
    //   console.log('发送验证码')

    //   btnEnable = true

    //   // 定时器
    //   count = 60
    //   const timer = setInterval(() => {
    //     if (count <= 0) {
    //       clearInterval(timer)
    //       btnEnable = false
    //     }
    //     if (typeof count === 'number') {
    //       count--
    //     }
    //   }, 1000)
    // }

    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.code-part {
  display: flex;

  .code-btn {
    margin-left: 8px;
  }
}
</style>
