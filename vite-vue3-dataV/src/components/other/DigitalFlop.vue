<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-10 15:19:58
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 15:30:27
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/other/DigitalFlop.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div small-bg>
      <dv-digital-flop :config="config1" />
      <button btn @click="changeConfig">
        增加数据
      </button>
    </div>
  </template>
  <script lang="ts" setup>
  function formatter(number: number) {
    const numbers = number.toString().split('').reverse()
    const segs = []
  
    while (numbers.length) segs.push(numbers.splice(0, 3).join(''))
  
    return segs.join(',').split('').reverse().join('')
  }
  
  const config1 = reactive({
    number: [123456],
    content: '{nt}个',
    formatter,
  })
  
  const changeConfig = () => {
    config1.number[0] += Math.random() * 100
  }
  </script>