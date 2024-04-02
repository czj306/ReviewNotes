<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 10:51:35
 * @FilePath: /ReviewNotes/vite-vue3-review/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" crudName="123"/>
      <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
