/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-27 15:39:51
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-27 16:03:47
 * @FilePath: /ReviewNotes/vite-vue3-review/plugins/index.ts
 * @Description: 手写自定义插件
 */
import { Plugin } from 'vite';
 
export function createMyVitePlugin(): Plugin {
  return {
    name: 'my-vite-plugin', // 插件名，用于调试和错误报告
    apply: 'serve', // 指定应用时机，'serve' 表示只在开发服务器中应用
    configureServer(server: any) {
      // 在服务器启动时执行的逻辑
      console.log('My Vite plugin is running!');
      
      // 可以在这里添加更多自定义逻辑，比如修改服务器的行为等
    }
  };
}