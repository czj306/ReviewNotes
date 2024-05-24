<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 13:39:10
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-23 14:44:41
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/components/SwitchBackColor.vue
 * @Description: 背景色切换
-->
<template>
  <el-switch
    @change="onChangeMedia"
    v-model="theme"
    :active-action-icon="Sunrise"
    :inactive-action-icon="MoonNight"
    class="switch-theme"
  />
</template>

<script setup lang="ts">
import { Sunrise, MoonNight } from "@element-plus/icons-vue";
import { onMounted, onUnmounted, ref } from "vue";
import { toggleDark } from "@/composables";
const matchMediaObj = window.matchMedia("(prefers-color-scheme: dark)");
const theme = ref(true);

const onChangeMedia = (event: MediaQueryListEvent) => {
  const newTheme = !event ? "dark" : "light";
  toggleDark(newTheme === "dark");
};

onMounted(() => {
  // 监听系统主题变化
  matchMediaObj.addEventListener("change", onChangeMedia);
});

onUnmounted(() => {
  matchMediaObj.removeEventListener("change", onChangeMedia);
});
</script>

<style lang="less" scoped>
.switch-theme {
    padding: 0 1rem;
}
    
</style>