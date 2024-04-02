/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 11:42:21
 * @FilePath: /ReviewNotes/vite-vue3-review/vite.config.ts
 * @Description: vite 配置
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import VueDevTools from 'vite-plugin-vue-devtools'
import { createMyVitePlugin } from './plugins/index.ts' // 导入插件
import removeConsole from "vite-plugin-remove-console"
import { VitePWA } from 'vite-plugin-pwa'

// import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

  
  return {
    plugins: [
      vue(),
      Pages({
        dirs: [
          { dir: 'src/pages', baseRoute: '' },
          { dir: 'src/features/**/pages', baseRoute: 'features' },
          { dir: 'src/admin/pages', baseRoute: 'admin' },
        ],
        exclude: ['**/components/*.vue'],
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'index'
      }),
      VueSetupExtend(),
      VueDevTools(),
      createMyVitePlugin(),
      removeConsole(),
      // Inspect(),
      VitePWA({
        manifest: {
          // 安装应用后显示的应用名
            name: "testing pwa app",
            "description": "A PWA demo built with Vite and vite pwa",
            "theme_color": "#242424",
            // 至少配置一个图标
            icons: [{
              // 注意如果应用不是部署在站点根目录则需要相对路径，图片文件放在项目/public/pwa/192x192.png
                src: "/public/pwa/192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                "src": "/public/vite.svg",
                "sizes": "512x512",
                "type": "image/svg+xml"
            }]
        },
        registerType: "autoUpdate",
        workbox: {
          // 对所有匹配的静态资源进行缓存
            globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          //   // 修改vite-pwa中workbox的配置，将jQuery也加入缓存。
          //   runtimeCaching: [{
          //     handler: 'CacheFirst',
          //     urlPattern: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js',
          //     options: {
          //         cacheName: 'jQuery',
          //         // 这是必须的
          //         cacheableResponse: {
          //             statuses: [0, 200]
          //         }
          //     }
          // }]
        },
        devOptions: {
          // 如果想在`vite dev`命令下调试PWA, 必须启用它
          // enabled: true,
          enabled: false,
           // Vite在dev模式下会使用浏览器原生的ESModule，将type设置为`"module"`与原先的保持一致
          type: "module"
        }
      })
    ],
    optimizeDeps: {
      include: ['axios']
    },
    // vite 配置
    server: {
      port: 3030,
      proxy: {
        // 指定代理所有/api请求
        '/api': {
          // 代理请求之后的请求地址
          target: 'http://127.0.0.1:4523/m1/1016926-0-default/',
          // 跨域
          changeOrigin: true
        }
      }
    },
    preview: {
      port: 8080,
    },
    resolve: {
      alias: {
        // 必须添加这一行，否则无法使用
        // vue: "vue/dist/vue.esm-bundler.js",
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        'layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        'features': fileURLToPath(new URL('./src/features', import.meta.url)),
        'components': fileURLToPath(new URL('./src/components', import.meta.url)),
        'router': fileURLToPath(new URL('./src/router', import.meta.url)),
        'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        'service': fileURLToPath(new URL('./src/service', import.meta.url)),
      }
    },
    esbuild: {
      // 移除日志打印及debugger,可在env配置VITE_DROP_CONSOLE
      drop: command === 'build' ? ['console', 'debugger'] : []
    },
  }
})