<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-25 12:55:11
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-25 14:10:14
 * @FilePath: /ReviewNotes/md/vueToDocs.md
 * @Description: 自动化生成Vue组件文档
-->
# Vue3转文档
- 解放生产力，自动化生成Vue组件文档
## 工具安装
``` bash 
npm i -g doc-vue
```

## 文档写法
> 在代码中的 “slot”、“props”、“emits”、“methods” 定义处添加以 “@doc” 开头的注释作为 api 描述。

``` bash
<template>
  <div class="component-crt-crud">
    <!-- @doc the custom actions buttons -->
    <slot name="customAction"></slot>
    <!-- @doc the modal content -->
    <slot name="modal"></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent} from 'vue';
  export default defineComponent({

    props: {
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
    },

    emits: [
      // @doc download button click event
      'downloadClick',
    ],

    setup() {
      return {};
    },
    methods: {
      /**
       * @doc show detal 
       * @param record detail data object
       */
      async show(record: BaseObject) {
        //...
      },

      // @doc fetch table data 
      async fetchList() {
        //...
      },
    },
  });
</script>
```

## 在命令行中使用
``` bash
docvue xxx.vue xxx.json
```
"xxx.vue" 是你的 vue 文件路径, "xxx.json" 是 API 文档文件路径.

## 输出的文件格式
根据输入的文档文件的后缀名，会自动生成以下格式之一的 API 文档: "json\md\html"，默认为 "json"。
``` bash
# 输出一个 json 文件
docvue xxx.vue xxx.json

# 输出一个 markdown 文件
docvue xxx.vue xxx.md

# 输出一个 html 文件
docvue xxx.vue xxx.html
```
## 输出
![alt text](imgs/vueToMark.png)
## 参考网址
- [掘金](https://juejin.cn/post/7062982843864973343)
- [demo](https://github.com/annnhan/doc-vue/blob/main/demo/b.md)