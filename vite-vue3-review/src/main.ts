/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 11:35:19
 * @FilePath: /ReviewNotes/vite-vue3-review/src/main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts';//将route里面的路由变成嵌套路由
 
const routes = setupLayouts(generatedRoutes);

import './style.css'

const router = createRouter({
    history: createWebHistory(),
    routes,
})
  
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
