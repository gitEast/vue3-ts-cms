/*
 * @Author: East Wind
 * @Date: 2021-08-07 11:31:00
 * @LastEditTime: 2021-08-09 21:23:02
 * @LastEditors: Please set LastEditors
 * @Description: 不同环境下的网络请求地址
 * @FilePath: \vue3-ts-cms\src\service\request\config.ts
 */
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://123.207.32.32:8000/'
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://eastwind.org/prod'
} else {
  BASE_URL = 'http://eastwind.org/test'
}

export { BASE_URL, TIME_OUT }
