<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-10 14:39:35
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/HelloWorld.vue
 * @Description: 测试文档页
-->

<template>
  <div class="component-crt-crud">
    <!-- @doc the custom actions buttons -->
    <slot name="customAction"></slot>
    <!-- @doc the modal content -->
    <slot name="modal"></slot>
    <button @click="show"></button>
  </div>
</template>
<!-- setup -->
<script setup lang="ts" name="test123">

  /**
  * @doc
  * @param {string} [text='确定'] - 按钮文本。
  * @param {boolean} [disabled=false] - 是否禁用按钮。
  */
  defineProps({
    // @doc name of crud
    crudName: {
      type: String,
      default: '',
      required: true,
    },
    // @doc modal form fieds
    modalFormSchema: {
      type: Array,
      default: () => [],
    },
    text: {
      default: '确定',
    },
    disabled: {
      default: false,
    },
  })
  const emits = defineEmits([
    // @doc download button click event
    'downloadClick',
  ])

  /**
   * @doc show detal 
   * @param record detail data object
   */
  async function show(record: {}) {
    emits('downloadClick', record)
    await fetchList()
  }

  // @doc fetch table data 
  async function fetchList() {
    console.log('fetchList: ', 123);
    //...
  }
</script>

<style lang="less" scoped>
  .component-crt-crud {
    height: 100px;
    width: 100px;
    background-color: white;
  }
</style>