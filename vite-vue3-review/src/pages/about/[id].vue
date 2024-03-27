<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-28 00:30:09
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 00:30:12
 * @FilePath: /ReviewNotes/vite-vue3-review/src/pages/about/[id].vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
defineProps({
  id: String,
})
</script>

<template>
  <div>
    <div>
      about/[id].vue: {{ id }}
    </div>
    <router-link to="/about/1b234bk12b3/more">
      more deep
    </router-link>
    <router-view />
  </div>
</template>

<route>
{
  name: 'about-user-id',
  meta: {
    requiresAuth: true,
  },
}
</route>