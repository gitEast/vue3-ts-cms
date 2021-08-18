/*
 * @Author: your name
 * @Date: 2021-08-16 22:43:41
 * @LastEditTime: 2021-08-16 22:48:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\utils\date-format.ts
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
