/*
 * @Author: East Wind
 * @Date: 2021-08-08 23:17:04
 * @LastEditTime: 2021-08-08 23:26:52
 * @LastEditors: Please set LastEditors
 * @Description: 缓存
 * @FilePath: \vue3-ts-cms\src\utils\cache.ts
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
