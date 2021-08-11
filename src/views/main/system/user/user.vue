<!--
 * @Author: your name
 * @Date: 2021-08-10 22:44:12
 * @LastEditTime: 2021-08-11 23:51:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
-->
<template>
  <div class="user">
    <div class="search">
      <east-form></east-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EastForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    EastForm
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        label: '用户名',
        rules: [],
        placeholder: '请'
      }
    ]
    console.log(formItems)
    return {}
  }
})
</script>

<style scoped></style>
