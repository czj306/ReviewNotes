/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 13:46:51
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-11 13:46:57
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/composables/dark.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark();
export const toggleDark = useToggle(isDark);