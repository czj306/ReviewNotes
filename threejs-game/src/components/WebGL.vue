<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-07 12:00:24
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-07 12:40:17
 * @FilePath: /ReviewNotes/threejs-game/src/components/WebGL.vue
 * @Description: webgl 创建使用
-->
<template>
    <div>
        <canvas :id="id" width="500" height="500" style="background-color: lightBlue"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
const props = defineProps({
    id: {
        default: () => "",
        required: true,
        type: String,
    }
})
onMounted (() => {
    var canvas= document.getElementById(props.id)
    console.log('canvas: ', canvas);
    //通过方法getContext()获取Canvas 2D绘图上下文
    var c =canvas.getContext('2d');
    c.moveTo(0,0);//直线起点坐标
    c.lineTo(50,50);//直线第2个点坐标
    c.lineTo(0,100);//直线第3个点坐标
    c.stroke();//把点连成直线绘制出来

    // //通过方法getContext()获取WebGL上下文
    // var gl=canvas.getContext('webgl');
    // //调用WebGL API绘制渲染方法drawArrays
    // gl.drawArrays(gl.POINTS,0,1);

}) 

</script>