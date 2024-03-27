<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-27 15:46:27
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-27 15:46:37
 * @FilePath: /ReviewNotes/vite-vue3-review/src/apps/layouts/AdminLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <div class="navbar">导航栏</div>
      <div class="sidebar">侧边栏</div>
      <router-view />
      <div class="footer">页脚</div>
    </div>
  </template>