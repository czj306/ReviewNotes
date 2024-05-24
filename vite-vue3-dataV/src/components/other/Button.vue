<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-10 15:18:08
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 15:26:02
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/other/Button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div style="width:800px;height:200px;" flex="~ col" gap8 justify-center items-center bg-dark>
      <div flex gap8>
        <dv-button :bg="false" @click="console.log('click')">智慧城市</dv-button>
        <dv-button @click="console.log('click')" border="Border2" color="#4c8045">智慧政务</dv-button>
        <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">智慧水利</dv-button>
      </div>
      <div flex gap8>
        <dv-button @click="console.log('click')" border="Border4" color="#a6559d">智慧交通</dv-button>
        <dv-button @click="console.log('click')" border="Border5" color="#e18a3b">智慧医疗</dv-button>
        <dv-button @click="console.log('click')" border="Border6" color="#615ea8">智慧农业</dv-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>