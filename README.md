<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-25 15:14:11
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 10:02:07
 * @FilePath: /ReviewNotes/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Review 创建
## 创建vite+vue3+typescript
```bash
npm init vite@latest
```

## 配置项目
1. public>favicon.ico 更换图标
2. index.html 修改标题
3. vite.config.ts 设置路径别名 Vite
```typescript
import { path } from "path";
export default defineConfig({
 ...
 resolve: {
    alias: {
      // 设置别名 这里的./指的是 vite.config.js 的所载目录（根目录）下面的 src
      '@': path.resolve(__dirname, './src')
    }
  }
})
```
## axios
## service
## store
- 采取Pinia
  - 插件（由于有了底层 API 的支持，Pinia store 现在完全支持扩展。）
  - 安装
  ``` bash
  yarn add pinia
  ```

  ``` typescript
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
  ```

## router（自动生成模块取缔）
- 采用插件 `vite-plugin-pages` | `vite-plugin-vue-layouts`
``` bash
yarn add vite-plugin-pages vite-plugin-vue-layouts -D

# 在vite.config.ts|js配置

import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

plugins: [
  Pages({
    dirs: [
      { dir: 'src/pages', baseRoute: '' },
      { dir: 'src/features/**/pages', baseRoute: 'features' },
      { dir: 'src/admin/pages', baseRoute: 'admin' },
    ],
    exclude: ['**/components/*.vue'],
  }),
  Layouts({
    layoutsDirs: 'src/layouts'
  })
]
```

## 同时运行多项目
### 使用 npm-run-all 方法运行多个项目
``` bash 
npm install npm-run-all --save-dev
```
``` json
"scripts": {
  "examples:start": "npm-run-all --parallel start:*",
  "start:serve": "vue-cli-service serve",
  "start:vue3": "cd examples/vue3 && yarn start",
  "start:vue2": "cd examples/vue2 && yarn start",
  "start:react1": "cd examples/react1 && npm start"
}
```
### 使用concurrently方法，运行多个项目
``` bash 
npm install -g concurrently
```
``` json 
"scripts": {
  "serve1": "cd examples/vue2 && yarn start",
  "serve2": "cd examples/vue3 && yarn start",
  "buildServer": "concurrently \"npm run serve1\" \"npm run serve2\" "
}
```
## 参考网址
- [掘金](https://juejin.cn/post/7254444906209984571)