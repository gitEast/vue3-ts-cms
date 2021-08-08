<!--
 * @Author: your name
 * @Date: 2021-07-29 21:34:57
 * @LastEditTime: 2021-08-08 14:58:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\App.vue
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
