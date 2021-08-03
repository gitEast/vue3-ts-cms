/*
 * @Author: your name
 * @Date: 2021-08-03 21:00:00
 * @LastEditTime: 2021-08-03 21:26:15
 * @LastEditors: Please set LastEditors
 * @Description: 封装 Element-Plus
 * @FilePath: \vue3-ts-cms\src\global\index.js
 */
// import { ElButton } from 'element-plus'
import type { App } from 'vue'
import registerEl from './registerEl'
// const elComponents = [ElButton]

export function registerApp(app: App): void {
  registerEl(app)
}
