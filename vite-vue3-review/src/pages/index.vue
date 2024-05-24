<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-28 00:15:26
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 15:11:43
 * @FilePath: /ReviewNotes/vite-vue3-review/src/pages/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p>pages/index.vue</p>

    <dv-capsule-chart :config="config" style="width: 25rem; height: 15rem" />

    <router-link to="/blog"> blog </router-link> |
    <router-link to="/about"> about </router-link> |
    <router-link to="/components"> components </router-link> |
    <router-link to="/markdown"> markdown </router-link> |
    <router-link to="/xxx/xxx"> not exists </router-link> |
    <router-link to="/features/dashboard"> features:dashboard </router-link> |
    <router-link to="/features/admin"> features:admin </router-link> |
    <router-link to="/admin"> admin </router-link>
  </div>
</template>

<script setup lang="ts">
import { getCategory, postCategory } from "../services/api.ts";
import { reactive } from 'vue'
const config = reactive({
  data: [
    {
      name: "南阳",
      value: 167,
    },
    {
      name: "周口",
      value: 123,
    },
    {
      name: "漯河",
      value: 98,
    },
    {
      name: "郑州",
      value: 75,
    },
    {
      name: "西峡",
      value: 66,
    },
  ],
  colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
  unit: "万元",
  labelNum: 8,
});
postCategory();

getCategory();
</script>

<route lang="json">
{
  "name": "homepage",
  "meta": {
    "requiresAuth": false
  }
}
</route>
