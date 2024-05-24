<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 11:18:05
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-11 11:57:54
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/components/ShowOrHideMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-icon @click="showNavBar" v-show="!state.isCollapse"><Fold /></el-icon>
  <el-icon @click="showNavBar" v-show="state.isCollapse"><Expand /></el-icon>
</template>


<script lang="ts" setup>
import { useDesignFormStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useDesignFormStore()
const { state } = storeToRefs(store)

const showNavBar = () => {
  store.showOrHideMenu()
}
</script>