/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:27:45
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-26 14:41:49
 * @FilePath: /ReviewNotes/vite-vue3-review/src/store/user.ts
 * @Description: 用户数据缓存
 */
import { ref, computed }from 'vue'
import { defineStore } from 'pinia'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', () => {
    const count = ref(0)
    const name = ref('')
    const list = ref([])
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
  
    return { name, list, count, doubleCount, increment }
})

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

// 使用组合式函数会让 SSR 变得更加复杂。