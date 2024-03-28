/// <reference types="vite/client" />
// <reference types="vite-plugin-pages/client" />
declare module 'vite-plugin-vue-setup-extend';
declare module 'virtual:*';
declare module 'vite-plugin-vue-devtools';
declare module 'plugins';
declare module '*.ts';
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