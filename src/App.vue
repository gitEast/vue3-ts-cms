<!--
 * @Author: your name
 * @Date: 2021-07-29 21:34:57
 * @LastEditTime: 2021-08-18 00:55:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\App.vue
-->
<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup(props) {
    const locale = zhCn
    return {
      locale
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
