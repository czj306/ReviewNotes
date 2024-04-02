<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-01 14:45:12
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-01 15:12:13
 * @FilePath: /ReviewNotes/md/frontend/pwaVite.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 实现PWA
## 安装 
``` typescript
yarn add vite-pwa-plugin -D
npm install vite-pwa-plugin -D

import {VitePWA} from 'vite-plugin-pwa'

# vite.config.ts
plugins: [
        vue(),
        VitePWA({
            manifest: {
            	// 安装应用后显示的应用名
                name: "应用名称",
                description: "应用描述",
                // 至少配置一个图标
                icons: [{
                	// 注意如果应用不是部署在站点根目录则需要相对路径，图片文件放在项目/public/pwa/192x192.png
                    src: "./pwa/192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                }]
            },
            registerType: "autoUpdate",
            workbox: {
            	// 对所有匹配的静态资源进行缓存
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
            devOptions: {
                enabled: true
            }
        })
    ],
```

## 生成图标
[图标直达](https://realfavicongenerator.net/)
[官网优化路径](https://vite-pwa-org.netlify.app/)
[掘金策略调整](https://juejin.cn/post/7294554207096750090)
