<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 12:17:54
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-12 09:34:04
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/components/Breadcrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>

<el-row :gutter="20" class="page-top-bar">
  <el-col :span="1" style="padding-top:.3em;">
    <ShowOrHideMenu></ShowOrHideMenu>
  </el-col>
  <el-col :span="18" style="padding-left:0;">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item style="padding-top:.4em;">home</el-breadcrumb-item>
      <el-breadcrumb-item style="padding-top:.4em;">promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>
        <el-input v-model="input" style="width: 120px" placeholder="Please input" />
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-col>
  <el-col :span="5" class="right">
    <SwitchBackColor></SwitchBackColor>
    <Language></Language>
  </el-col>
</el-row>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import ShowOrHideMenu from "@/components/ShowOrHideMenu.vue";
  import Language from "@/components/Language.vue";
  import SwitchBackColor from "@/components/SwitchBackColor.vue";
  import { ArrowRight } from '@element-plus/icons-vue'
  const input = ref('')
  </script>
  
<style lang="less" scoped>
.page-top-bar {
  padding-top: 20px;
  .right {
    text-align: right;
  }
}
</style>