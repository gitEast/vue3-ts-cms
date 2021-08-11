<!--
 * @Author: your name
 * @Date: 2021-08-11 23:23:14
 * @LastEditTime: 2021-08-11 23:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\base-ui\form\src\form.vue
-->
<template>
  <div>
    <el-form label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input show-password></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="喜欢的运动">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItem: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
