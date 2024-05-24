/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 11:11:08
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-11 14:29:45
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const WIDTH: any = { true: '200px', false: '60px' }
const MAIN_WIDTH: any = { true: 'calc(100vw - 200px)', false: 'calc(100vw - 60px)' }
export const useDesignFormStore = defineStore('designForm', () => {
  const state: any = reactive({
    isCollapse: false,
    CWidth: WIDTH['true'],
    MWidth: MAIN_WIDTH['true'],
    locale: zhCn,
    language: 'zh-cn',
    langs: ['zh-cn', 'en']
  })
  const showOrHideMenu = () => {
    state.CWidth = WIDTH[state.isCollapse]
    state.MWidth = MAIN_WIDTH[state.isCollapse]
    state.isCollapse = !state.isCollapse
  }

  state.locale = computed(() => (state.language === 'zh-cn' ? zhCn : en))

  const toggle = (op: any) => {
    state.language = op
  }
  return {
    state,
    showOrHideMenu,
    toggle,
  }
})
