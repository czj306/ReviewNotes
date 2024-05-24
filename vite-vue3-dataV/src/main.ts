/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 10:05:49
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-11 23:50:28
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createPinia } from 'pinia'

import App from './App.vue'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { border } from '@/components'
const app = createApp(App)

// 全局注册ICON
// @ts-ignore
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// for (const [key, component] of Object.entries(border)) {
//   app.component(key, component)
// }

const pinia = createPinia()

app.use(ElementPlus, { 
    size: 'small', 
    zIndex: 3000,
    locale: zhCn,
})
app.use(DataVVue3)
app.use(pinia)

app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0,
})

app.mount('#app')
