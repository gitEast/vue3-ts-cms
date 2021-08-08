/*
 * @Author: East Wind
 * @Date: 2021-08-07 11:31:00
 * @LastEditTime: 2021-08-07 11:34:07
 * @LastEditors: Please set LastEditors
 * @Description: 不同环境下的网络请求地址
 * @FilePath: \vue3-ts-cms\src\service\request\config.ts
 */
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://eastwind.org/prod'
} else {
  BASE_URL = 'http://eastwind.org/test'
}

export { BASE_URL, TIME_OUT }
