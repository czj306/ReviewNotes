<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-10 15:18:08
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 15:30:08
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/other/ActiveRingChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div w50rem h34rem flex="~ col" justify-center items-center bg-dark>
      <dv-active-ring-chart :config="conf" style="width:300px;height:300px"/>
      <div flex="~ col" gap2 justify-center items-center>
        <div>
          <span text-white>城市：</span>
          <input v-model="cityName" demo-input />
        </div>
        <div>
          <span text-white>Value：</span>
          <input v-model="cityValue" type="number" demo-input />
        </div>
        <div>
          <button btn @click="addData">
            添加数据
          </button>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  
  const cityName = ref('测试')
  const cityValue = ref(58)
  
  const conf = reactive({
    lineWidth: 24,
    digitalFlopStyle: {
      fill: 'pink',
    },
    data: [
      {
        name: '杭州',
        value: 98,
      },
      {
        name: '金华',
        value: 150,
      },
      {
        name: '宁波',
        value: 62,
      },
      {
        name: '太原',
        value: 54,
      },
    ],
  })
  
  const addData = () => {
    if (!cityName.value || !cityValue.value)
      return
  
    conf.data.push({
      name: cityName.value,
      value: parseInt(cityValue.value),
    })
  }
  </script>