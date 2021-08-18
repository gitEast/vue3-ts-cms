<!--
 * @Author: your name
 * @Date: 2021-08-10 20:38:26
 * @LastEditTime: 2021-08-13 07:00:13
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
      <east-breadcrumb :breadcrumbs="breadcrumbs"></east-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import EastBreadcrumb from '@/base-ui/breadcrumb'
import userInfo from './user-info.vue'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    userInfo,
    EastBreadcrumb
  },
  emits: ['foldChange'],
  setup(porps, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据：[{name: , path: }, {...}, ...]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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
