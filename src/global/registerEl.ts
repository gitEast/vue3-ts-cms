/*
 * @Author: your name
 * @Date: 2021-08-03 21:04:37
 * @LastEditTime: 2021-08-08 17:09:53
 * @LastEditors: Please set LastEditors
 * @Description: 封装 注册 Element-Plus 组件
 * @FilePath: \vue3-ts-cms\src\global\registerEl.ts
 */
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'
import type { App } from 'vue'

const elComponents = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const elComponent of elComponents) {
    app.component(elComponent.name, elComponent)
  }
}

// export default { registerEl }
