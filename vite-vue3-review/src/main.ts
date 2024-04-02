/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-01 15:51:39
 * @FilePath: /ReviewNotes/vite-vue3-review/src/main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';//将route里面的路由变成嵌套路由
// // 当应用发现有更新时，应用会自动安装新的Service Worker，更新缓存并刷新页面。
// import { registerSW } from 'virtual:pwa-register';
// registerSW({ immediate: true })
import Worker from 'utils/worker.ts?worker'

const worker = new Worker()
worker.onmessage = (e) => {
    console.log('main.js', e.data)
}
worker.postMessage('hello from main')

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
