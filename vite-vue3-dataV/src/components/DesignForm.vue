<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-11 14:11:16
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-23 15:14:08
 * @FilePath: /ReviewNotes/vite-vue3-dataV/src/components/DesignForm.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="design-form">
    <el-container>
      <el-aside width="200px" class="design-form-aside">
        <el-tabs v-model="state.leftConfig">
          <el-tab-pane label="组件" name="element">
            <el-text class="mx-1">边框</el-text>
            <div>
              <div v-for="(element,index) in state.borders" draggable class="design-form-aside-item" :name="element.key" :key="element.key">
                <component 
                :ref="element.key" :name="element.key" :key="element.key"
                :id="element.key" :is="element.component"></component>
              </div>
            </div>
            <el-text class="mx-1">装饰</el-text>
            <!-- 装饰图层 -->
            <el-text class="mx-1">其他</el-text>
            <!-- 其他图层 -->
           
          </el-tab-pane>
          <el-tab-pane label="图层" name="coverage">
            
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main class="design-form-content">
      </el-main>
      <el-aside width="200px">
        
        <el-tabs v-model="state.rightConfig">
          <el-tab-pane label="位置属性" name="caption-side">
           
          </el-tab-pane>
          <el-tab-pane label="大屏配置" name="screen-configuration">
            
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { reactive, shallowRef } from 'vue'
import draggable from 'vuedraggable-es'

import { border, decoration, other } from "@/components/index.ts";
const state = reactive({
  borders: [],
  decorations: [],
  others: [],
  leftConfig: 'element',
  rightConfig: 'caption-side',
  drag:false,
})
for (const [key, component] of Object.entries(border)) {
  state.borders.push({key, component: shallowRef(component)});
}
// for (const [key, component] of Object.entries(decoration)) {
//   state.decorations.push({key, component: shallowRef(component)});
// }
// for (const [key, component] of Object.entries(other)) {
//   state.others.push({key, component: shallowRef(component)});
// }
</script>
<style lang="less">
.design-form .el-tabs__header {
  margin: 0 0 6px !important;
}
</style>
<style lang="less" scoped>
.design-form {
  &-aside {
    #pane-element {
      height: calc(100vh - 126px);
      overflow: auto;
      &>div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    &-item {
      width: 80px;
      height: 80px;
      overflow: hidden;
      margin-bottom: 1rem;
      cursor: move;
      // user-select: none;
      pointer-events: none;
    }
  }
}
  
</style>
