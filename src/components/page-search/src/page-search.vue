<!--
 * @Author: your name
 * @Date: 2021-08-13 06:49:34
 * @LastEditTime: 2021-08-18 23:54:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\components\page-search\src\page-search.vue
-->
<template>
  <div class="page-search">
    <east-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button plain @click="handleResetClick">重置</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </template>
    </east-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EastForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { EastForm },
  setup(props) {
    // 双向绑定的属性应该是由 searchFormConfig 中的 field 决定
    // 1. 优化一：属性动态绑定
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2. 当用户点击重置按钮时，重置 formData
    const handleResetClick = () => {
      formData.value = formOriginData
    }

    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 10px 20px 0;
}
</style>
