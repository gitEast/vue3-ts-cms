<!--
 * @Author: your name
 * @Date: 2021-08-18 01:18:24
 * @LastEditTime: 2021-08-18 23:10:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\components\page-content\src\page-content.vue
-->
<template>
  <div class="page-content">
    <east-table v-bind="contentTableConfig" :listData="dataList">
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
        <el-button icon="el-icon-refresh">刷新</el-button>
      </template>
      <!-- 列中的插槽 -->
      <template #enable="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>

      <!-- <template #header> hhhhhh </template> -->
      <!-- <template #footer> oooooo </template> -->
    </east-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import EastTable from '@/base-ui/table'

import { useStore } from '@/store'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    EastTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    // const selectionChange = (val: any) => {
    //   console.log(val)
    // }
    return {
      dataList
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
