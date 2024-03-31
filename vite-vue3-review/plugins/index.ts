/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-27 15:39:51
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-31 15:05:13
 * @FilePath: /ReviewNotes/vite-vue3-review/plugins/index.ts
 * @Description: 手写自定义插件
 */
import { Plugin } from 'vite';
import cp from 'child_process';
const exclude = ['node_modules', '.ts', '.css', '.js', 'plugin-vue:export-helper','less']
const include = ['components']
export function createMyVitePlugin(): Plugin {
  return {
    name: 'vite:doc', // 插件名，用于调试和错误报告
    apply: 'serve', // 指定应用时机，'serve' 表示只在开发服务器中应用
    enforce: 'pre',
    load(id) {
      
      if(! exclude.find((key) => id.indexOf(key) > -1) && include.find((key) => id.indexOf(key) > -1)) {
        console.log(`First directory -> Starting build`);
        
        try {
          console.log('id: ', id);
          let arr = id.replace(process.cwd(), '').replace('/src/', '').replace(/\.vue/g, '').toLowerCase().split('/').join('-')
        // console.log('--------------------------------', id.replace(process.cwd(), ''), process.cwd() + `/docs/${arr}.md`)
          process.nextTick(() => {
            // const ls = cp.spawn('npm', ['run', 'dev']);
            const ls = cp.spawn('docvue', [id , process.cwd() + `/docs/${arr}.md`]);
            // ls.stdout.on('data', (data) => {
            //   console.info(`${data}`);
            // });
            
            // ls.stderr.on('data', (data) => {
            //   process.stdout.write(`${data}`);
        
            // });
            
            // ls.on('close', (code) => {
            //   console.log(`child process exited with code ${code}`);
            // });
          })
        } catch (err) {
          console.error(`chdir: ${err}`);
        }
        process.on('exit', (code) => {
          console.log(`退出码: ${code}`);
        });
      }

    },

      // Vite 独有钩子
      config(config) {
        // console.log(`First directory -> Starting build`);
      },
      // // Vite 独有钩子
      // configResolved(resolvedCofnig) {
      //   console.log('configResolved');
      // },
      // // 通用钩子
      // options(opts) {
      //   console.log('options');
      //   return opts;
      // },
      // // Vite 独有钩子
      // configureServer(server) {
      //   console.log('configureServer');
      //   setTimeout(() => {
      //     // 手动退出进程
      //     process.kill(process.pid, 'SIGTERM');
      //   }, 3000)
      // },
      // // 通用钩子
      // buildStart() {
      //   console.log('buildStart');
      // },
      // // 通用钩子
      // buildEnd() {
      //   console.log('buildEnd');
      // },
      // // 通用钩子
      // closeBundle() {
      //   console.log('closeBundle');
      // }
  };
}