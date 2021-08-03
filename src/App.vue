<!--
 * @Author: your name
 * @Date: 2021-07-29 21:34:57
 * @LastEditTime: 2021-08-03 20:38:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\App.vue
-->
<template>
  <div>
    <h2>{{ $store.state.name }}</h2>

    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button plain>按钮1</el-button>
    <el-button type="primary">按钮2</el-button>
    <el-button type="danger">按钮3</el-button>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
