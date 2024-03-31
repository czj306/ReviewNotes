/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:13:12
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 11:57:40
 * @FilePath: /ReviewNotes/vite-vue3-review/src/service/api.ts
 * @Description: api 基础数据中心
 */

import { getA, postA } from './config'

export const getCategory = () =>  getA('/category')
export const postCategory = () => postA('/category', {data: 'application'})
