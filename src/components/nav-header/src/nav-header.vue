<!--
 * @Author: your name
 * @Date: 2021-08-10 20:38:26
 * @LastEditTime: 2021-08-11 22:07:02
 * @LastEditors: Please set LastEditors
 * @Description: 顶栏：折叠图标 + 面包屑 + 通知等 + 账号
 * @FilePath: \vue3-ts-cms\src\components\nav-header\src\nav-header.vue
-->
<template>
  <div class="nav-header">
    <i
      class="header-fold"
      :class="!isFold ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'

export default defineComponent({
  components: {
    userInfo
  },
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
.nav-header {
  display: flex;
  width: 100%;
  .header-fold {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
