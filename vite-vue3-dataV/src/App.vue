<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 10:05:49
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-11 15:39:36
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { computed } from 'vue'
import Menu from "@/components/Menu.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import DesignForm from "@/components/DesignForm.vue";

import { useDesignFormStore } from "@/stores";
import { storeToRefs } from "pinia";

const { state } = storeToRefs(useDesignFormStore());

</script>

<template>
  <el-config-provider :locale="state.locale">
    <el-container class="c-body">
      <el-aside :width="state.CWidth">
        <Menu></Menu>
      </el-aside>
      <el-container :style="{width: state.MWidth}">
        <el-header>
          <Breadcrumb />
        </el-header>
        <el-main style="padding-top: 0;">
          <DesignForm></DesignForm>
        </el-main>
      </el-container>
    </el-container>
</el-config-provider>
</template>

<style lang="less" scoped>
.c-body {
  width: auto;
  overflow: hidden;
  .el-aside {
    .el-menu {
      height: 100vh;
    }
  }
}
</style>