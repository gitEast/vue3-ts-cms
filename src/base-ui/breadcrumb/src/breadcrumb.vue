<!--
 * @Author: your name
 * @Date: 2021-08-12 22:42:14
 * @LastEditTime: 2021-08-13 05:55:31
 * @LastEditors: Please set LastEditors
 * @Description: 封装面包屑
 * @FilePath: \vue3-ts-cms\src\base-ui\breadcrumb\src\breadcrumb.vue
-->
<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>
