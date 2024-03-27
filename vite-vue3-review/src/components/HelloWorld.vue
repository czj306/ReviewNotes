<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 13:57:17
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-27 13:43:12
 * @FilePath: /ReviewNotes/vite-vue3-review/src/components/HelloWorld.vue
 * @Description: 测试文档页
-->

<template>
  <div class="component-crt-crud">
    213123
    <!-- @doc the custom actions buttons -->
    <slot name="customAction"></slot>
    <!-- @doc the modal content -->
    <slot name="modal"></slot>
  </div>
</template>
<!-- setup -->
<script setup lang="ts" name="test123">

  /**
  * @vuedoc
  * @param {string} [text='确定'] - 按钮文本。
  * @param {boolean} [disabled=false] - 是否禁用按钮。
  */
  defineProps({
    // @doc name of crud
    crudName: {
      type: String,
      default: '',
    },
    // @doc modal form fieds
    modalFormSchema: {
      type: Array as PropType<SearchSchema[]>,
      default: () => [],
    },
    text: {
      default: '确定',
    },
    disabled: {
      default: false,
    },
  })
  defineEmits: [
    // @doc download button click event
    'downloadClick',
  ],

  /**
   * @doc show detal 
   * @param record detail data object
   */
  async function show(record: BaseObject) {
    //...
  }

  // @doc fetch table data 
  async function fetchList() {
    //...
  }
</script>

<style lang="less" scoped>
  .component-crt-crud {
    height: 100px;
    whidth: 100px;
    background-color: white;
  }
</style>