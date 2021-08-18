<!--
 * @Author: your name
 * @Date: 2021-08-10 22:45:33
 * @LastEditTime: 2021-08-18 23:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\views\main\system\role\role.vue
-->
<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :content-table-config="contentTableConfig"
      pageName="role"
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
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
