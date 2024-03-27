<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-28 00:13:33
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 00:13:37
 * @FilePath: /ReviewNotes/vite-vue3-review/src/pages/blog/[id].vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
defineProps({
  id: String,
})
</script>

<template>
  <div>
    <p>blog/[id].vue: {{ id }}</p>
    <p>
      {{ $route }}
    </p>
  </div>
</template>

<route>
{
  name: 'blog-id',
  meta: {
    requiresAuth: false,
  },
}
</route>