/*
 * @Author: your name
 * @Date: 2021-08-16 22:36:18
 * @LastEditTime: 2021-08-16 22:49:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\global\registerProperties.ts
 */
import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
