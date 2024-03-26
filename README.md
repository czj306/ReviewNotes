<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-25 15:14:11
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-26 14:21:21
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
  - 
## router


## 参考网址
- [掘金](https://juejin.cn/post/7254444906209984571)