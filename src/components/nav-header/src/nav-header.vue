<!--
 * @Author: your name
 * @Date: 2021-08-10 20:38:26
 * @LastEditTime: 2021-08-10 21:04:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\components\nav-header\src\nav-header.vue
-->
<template>
  <div class="nav-header">
    <i
      class="header-fold"
      :class="!isFold ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"
      @click="handleFoldClick"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(porps, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.header-fold {
  cursor: pointer;
}
</style>
