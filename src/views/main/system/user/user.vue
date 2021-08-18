<!--
 * @Author: your name
 * @Date: 2021-08-10 22:44:12
 * @LastEditTime: 2021-08-18 23:30:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\views\main\system\user\user.vue
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
