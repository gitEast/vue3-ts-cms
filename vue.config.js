/*
 * @Author: East Wind
 * @Date: 2021-07-31 10:03:38
 * @LastEditTime: 2021-08-09 23:44:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\vue.config.js
 */
const path = require('path')

module.exports = {
  outputDir: './build',
  // publicPath: './',
  // 解决跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components',
      views: '@/views',
      assets: '@/assets',
      baseui: '@/base-ui',
      global: '@/global',
      router: '@/router',
      service: '@/service',
      store: '@/store'
    }
  }
}
