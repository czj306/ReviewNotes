<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-27 23:38:47
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-27 23:38:57
 * @FilePath: /ReviewNotes/vite-vue3-review/src/layouts/DesktopLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="flex-box">
      <SidebarMenu />
      <div class="right-box">
        <div class="right-box-header">
          <TopbarMenu />
        </div>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </div>
    </div>
  </template>