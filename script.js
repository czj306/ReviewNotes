/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-27 09:28:21
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-27 09:28:28
 * @FilePath: /ReviewNotes/script.js
 * @Description: 脚本同时执行多项目
 */
const cp = require('child_process');
try {
  process.chdir(process.env.DIR);
  console.log(`First directory -> Starting build: ${process.cwd()}`);

  process.nextTick(() => {
    const ls = cp.spawn('npm', ['run', 'dev']);
    ls.stdout.on('data', (data) => {
      console.info(`${data}`);
    });
    
    ls.stderr.on('data', (data) => {
      process.stdout.write(`${data}`);

    });
    
    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  })
} catch (err) {
  console.error(`chdir: ${err}`);
}
process.on('exit', (code) => {
  console.log(`退出码: ${code}`);
});