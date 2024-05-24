<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 10:54:57
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-23 14:40:33
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/components/Language.vue
 * @Description: 语言按钮切换
-->
<template>
    <el-dropdown class="language-dropdown" @command="handleCommand">
        <span class="el-dropdown-link">
        {{state.language}}
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
        </span>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item :command="item + ''" v-for="(item, index) in state.langs" :key="index">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { useDesignFormStore } from "@/stores";
import { storeToRefs } from "pinia";
const store = useDesignFormStore()
const { state } = storeToRefs(store);

const handleCommand = (command: string | number | object) => {
    store.toggle(command)

}
</script>

<style lang="less" scoped>
    .language-dropdown {
        padding-top: 0.2em !important;
        width: 62px;
     
        .el-tooltip__trigger:focus-visible {
            outline: none !important;
        }
    }
</style>