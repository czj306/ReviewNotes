/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 14:17:43
 * @FilePath: /ReviewNotes/vite-vue3-review/src/main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register';
import generatedRoutes from 'virtual:generated-pages';
//将route里面的路由变成嵌套路由
import { setupLayouts } from 'virtual:generated-layouts';
import webSee from '@websee/core';
import performance from '@websee/performance';
import recordscreen from '@websee/recordscreen';
import App from './App.vue'
import Worker from 'utils/worker.ts?worker'


// 当应用发现有更新时，应用会自动安装新的Service Worker，更新缓存并刷新页面。
registerSW({ immediate: true })

// 实现多线程方式 worker
const worker = new Worker()
worker.onmessage = (e) => {
    console.log('main.js', e.data)
}
worker.postMessage('hello from main')

const pinia = createPinia()
const app = createApp(App)
// 自动生成路由方式
const routes = setupLayouts(generatedRoutes);;
const router = createRouter({
    history: createWebHistory(),
    routes,
})
import './style.css'
app.use(router)
app.use(pinia)
app.use(webSee, {
    dsn: 'http://text.com/reportData',
    apikey: 'abcd',
    silentWhiteScreen: true, // 开启白屏检测
    skeletonProject: true, // 项目有骨架屏
    repeatCodeError: true, // 开启错误上报去重
    silentXhr: false, // 取消监听xhr请求报错
    silentFetch: false, // 取消监听fetch请求报错
    userId: '123',
    handleHttpStatus(data) {
      let { url, response } = data;
      // code为200，接口正常，反之亦然
      let { code } = typeof response === 'string' ? JSON.parse(response) : response;
      if (url.includes('/getErrorList')) {
        return code === 200 ? true : false;
      } else {
        return true;
      }
    }
  });
  
  // 注册性能检测插件
  webSee.use(performance, {});
  // 注册页面录屏插件，设置单次录屏时长为20s，默认是10s
  webSee.use(recordscreen, { recordScreentime: 10 });

app.mount('#app')


// TODO: Remove this
// import ErrorFn from 'utils/errorHandler.ts?errorHandler'
// // 生产环境提交错误情况
// if (isProd) {
//     app.config.errorHandler = ErrorFn.errorHandler
//     window.onerror = ErrorFn.onerror
// }
