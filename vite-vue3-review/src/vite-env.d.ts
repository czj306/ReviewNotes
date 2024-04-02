/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-28 00:55:07
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 11:44:48
 * @FilePath: /ReviewNotes/vite-vue3-review/src/vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-pwa/client" />
// declare module 'virtual:*';
declare module 'vite-plugin-vue-setup-extend';
declare module 'vite-plugin-vue-devtools';
declare module 'plugins';
declare module '*.ts';
declare module 'qs';

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomStateProperties {
    // // 通过使用一个 setter，我们可以允许字符串和引用。
    // set hello(value: string | Ref<string>)
    // get hello(): string
    list: Array<string>
    price: Float32List
    // 你也可以定义更简单的值
    simpleNumber: number

    // 添加路由(#adding-new-external-properties)
    router: Router
  }
}