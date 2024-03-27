/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:10:09
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-26 14:13:54
 * @FilePath: /ReviewNotes/vite-vue3-review/src/service/config.ts
 * @Description: service 基础配置中心
 */
// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  BASE_URL =
    'https://www.fastmock.site/mock/046c9a86f344ac3742b8411ee508e233/cms' //fastmock
}

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export { BASE_URL }