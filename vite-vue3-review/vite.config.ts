/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 10:02:01
 * @FilePath: /ReviewNotes/vite-vue3-review/vite.config.ts
 * @Description: vite 配置
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import VueDevTools from 'vite-plugin-vue-devtools'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { createMyVitePlugin } from './plugins/index.ts' // 导入插件
import removeConsole from "vite-plugin-remove-console"
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
        layoutsDirs: 'src/layouts'
      }),
      VueSetupExtend(),
      VueDevTools(),
      createMyVitePlugin(),
      removeConsole(),
      // Inspect(),
    ],
    // vite 配置
    server: {
      port: 3030,
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
      }
    },
    esbuild: {
      // 移除日志打印及debugger,可在env配置VITE_DROP_CONSOLE
      drop: command === 'build' ? ['console', 'debugger'] : []
    },
  }
})