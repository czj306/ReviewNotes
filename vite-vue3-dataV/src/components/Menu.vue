<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 11:02:36
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-23 14:49:55
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/components/Menu.vue
 * @Description: Menu 菜单栏
-->
<template>
    <el-menu
      default-active="2"
      :collapse="state.isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  
import { useDesignFormStore } from '@/stores'
import { storeToRefs } from 'pinia'

const { state } = storeToRefs(useDesignFormStore())

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>
  