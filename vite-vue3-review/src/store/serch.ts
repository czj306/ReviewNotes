/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:32:10
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-26 14:32:18
 * @FilePath: /ReviewNotes/vite-vue3-review/src/store/serch.ts
 * @Description: 路由缓存
 */
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
  const appProvided = inject('appProvided')

  // ...

  return {
    // ...
  }
})