/*
 * @Author: East Wind
 * @Date: 2021-07-31 10:03:38
 * @LastEditTime: 2021-07-31 11:45:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\vue.config.js
 */
const path = require('path')

module.exports = {
  outputDir: './build',
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      'components': '@/components',
      'views': '@/views'
    }
  }
}
