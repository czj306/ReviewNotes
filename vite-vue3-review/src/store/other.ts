/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:40:33
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-26 14:40:46
 * @FilePath: /ReviewNotes/vite-vue3-review/src/store/other.ts
 * @Description: 其他数据缓存
 */
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  getters: {
    summary(state) {
      const user = useUserStore()

      return `Hi ${user.name}, you have ${state.list.length} items in your cart. It costs ${state.price}.`
    },
  },
})