<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-10 15:18:08
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 15:29:40
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/other/Charts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div w50rem h25rem flex="~ col" justify-center items-center bg-dark>
      <div>
        <dv-charts :option="option" style="width:25rem;height:15rem;"/>
      </div>
      <div pt5>
        <button btn @click="updateData">修改数据</button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  const updateData = ()=>{
    option.series[0].data[0].value = Math.floor(Math.random() * 100)
  }
  
  const option = reactive({
    title: {
      text: '剩余油量表',
      style: {
        fill: '#fff'
      }
    },
    series: [
      {
        type: 'gauge',
        data: [ { name: 'itemA', value: 55 } ],
        center: ['50%', '55%'],
        axisLabel: {
          formatter: '{value}%',
          style: {
            fill: '#fff'
          }
        },
        axisTick: {
          style: {
            stroke: '#fff'
          }
        },
        animationCurve: 'easeInOutBack'
      }
    ]
  })
  </script>