<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-25 10:01:06
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-25 10:01:21
 * @FilePath: /ReviewNotes/md/codeUseTemplate.md
 * @Description: 编写UI组件时，md使用说明文档模板
-->
# Button 按钮
 
## 基础用法
 
<div class="ui-button">
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">绿色按钮</el-button>
  <el-button type="info">灰色按钮</el-button>
  <el-button type="warning">黄色按钮</el-button>
  <el-button type="danger">红色按钮</el-button>
</div>
 
<details>
  <summary>查看代码</summary>
 
``` vue
<template>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">绿色按钮</el-button>
  <el-button type="info">灰色按钮</el-button>
  <el-button type="warning">黄色按钮</el-button>
  <el-button type="danger">红色按钮</el-button>
</template>
```
 
</details>
 
 
### plain用法
 
<div class="ui-button">
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>绿色按钮</el-button>
  <el-button type="info" plain>灰色按钮</el-button>
  <el-button type="warning" plain>黄色按钮</el-button>
  <el-button type="danger" plain>红色按钮</el-button>
</div>
 
::: details CODE
 
``` vue
<el-button type="primary" plain>主要按钮</el-button>
<el-button type="success" plain>绿色按钮</el-button>
<el-button type="info" plain>灰色按钮</el-button>
<el-button type="warning" plain>黄色按钮</el-button>
<el-button type="danger" plain>红色按钮</el-button>
```
:::