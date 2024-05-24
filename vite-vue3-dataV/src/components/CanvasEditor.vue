<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-14 21:23:09
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-22 14:49:22
 * @FilePath: /vite-vue3-dataV/src/components/CanvasEditor.vue
 * @Description: 编辑画布
-->
<template>
  <div id="app">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  },
  methods: {
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      this.ctx.stroke();
    }
  }
};
</script>
