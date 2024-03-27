/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-28 00:23:51
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 00:23:57
 * @FilePath: /ReviewNotes/vite-vue3-review/scripts/publish.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { execSync } from 'node:child_process'
import { version } from '../package.json'

let command = 'npm publish --access public --no-git-checks'

if (version.includes('beta'))
  command += ' --tag beta'

execSync(command, { stdio: 'inherit' })