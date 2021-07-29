<!--
 * @Author: your name
 * @Date: 2021-07-29 21:34:57
 * @LastEditTime: 2021-07-29 22:15:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\App.vue
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  }
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
