<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-07 12:13:42
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-08 15:14:14
 * @FilePath: /ReviewNotes/threejs-game/src/components/Threejs.vue
 * @Description: ThreeJs game
-->
<template>
  <div class="home">
    <div class="canvas-container" ref="canvasDom"></div>
    <div class="home-content">
      <div class="home-content-title">
        <h1>汽车展示与选配</h1>
      </div>
      <h2>选择车身颜色</h2>
     <div class="select">
        <div
          class="select-item"
          v-for="(item, index) in colors"
          :key="index"
          @click="selectColor(index)"
        >
          <div
            class="select-item-color"
            :style="{ backgroundColor: item }"
          ></div>
        </div>
      </div>

      <h2>选择贴膜材质</h2>
      <div class="select">
        <div
          class="select-item"
          v-for="(item, index) in materials"
          :key="index"
          @click="selectMaterial(index)"
        >
          <div class="select-item-text" style="margin-right: 5px;">{{ item.name }} </div>
        </div>
      </div> 
    </div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from "three"
// 导入轨道控制器 - 控制物体的左右上下移动（ 可以设置xyz轴 ）
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// 导入gltf载入库 - 用于创出模型
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// // import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
let controls;
// 初始化场景
const scene = new THREE.Scene()
// 初始化相机 - 透视相机
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000)
// 设置相机位置 x y z
camera.position.set(0, 2, 6) 
// 设置宽高比例
camera.aspect = window.innerWidth / window.innerHeight
// 更新相机矩阵
camera.updateProjectionMatrix()
// 把相机添加到场景之中
scene.add( camera );

// 设置渲染器
const renderer = new THREE.WebGLRenderer({
  // 设置抗锯齿 - 更理想的渲染
  antialias:true,
})
renderer.outputEncoding = THREE.sRGBEncoding; // 设置编码
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth,window.innerHeight)

// // 监听画面变化，更新渲染画面
// window.addEventListener('resize',()=>{
//   // 更新摄像头
//   camera.aspect = window.innerWidth / window.innerHeight
//   // 更新摄像头的头部矩阵
//   camera.updateProjectionMatrix()
//   // 更新渲染器
//   renderer.setSize(window.innerWidth, window.innerHeight)
// })


// 渲染函数 - 每一帧渲染一次
function render() {
  // 渲染下一帧 的时候 会调用 animate 函数
	requestAnimationFrame( render );
	renderer.render( scene, camera );
  controls && controls.update() // 控制器的更新
}

let wheels = []; // 汽车轮毂  
let cartBody,frontCar,hoodCar,glassCar;// cartBody-车身 frontCar-前 hoodCar glassCar-挡风玻璃
// 创建材质
const wheelsMaterial = new THREE.MeshPhysicalMaterial({
  color:0xff0000,
  roughness:0.5,
  metalness:0.1,
})
const cartMaterial = new THREE.MeshPhysicalMaterial({
  color:0xff0000,
  roughness:0.5,
  metalness:1,
  clearcoat:1, // 清洁度
  clearcoatRoughness:0,
})
const frontMaterial = new THREE.MeshPhysicalMaterial({
  // color:0xff0000,
  color:0xff00ff,
  roughness:0.5,
  metalness:1,
  clearcoat:1, // 清洁度
  clearcoatRoughness:0,
})
const hoodMaterial = new THREE.MeshPhysicalMaterial({
  color:0xff0000,
  roughness:0.5,
  metalness:1,
  clearcoat:1, // 清洁度
  clearcoatRoughness:0,
})
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color:0xffffff,
//   transimission:1, // 完全通透
  transparent:true,
  roughness:0.1,
  metalness:1,
})

// 设置车身颜色
let colors = ["red", "blue", "green", "gray", "orange", "purple"];
let selectColor = (index) => {
  cartMaterial.color.set(colors[index]);
  frontMaterial.color.set(colors[index]);
  hoodMaterial.color.set(colors[index]);
  wheelsMaterial.color.set(colors[index]);
  // glassMaterial.color.set(colors[index]);
};

// 设置车身 贴膜材质
let materials = [
  { name: "磨砂", value: 1 },
  { name: "冰晶", value: 0 },
];
let selectMaterial = (index) => {
  cartMaterial.clearcoatRoughness = materials[index].value;
  frontMaterial.clearcoatRoughness = materials[index].value;
  hoodMaterial.clearcoatRoughness = materials[index].value;
};

// 将webgl渲染的canvas内容添加到div上
const canvasDom = ref(null)
// dom节点挂载之后 渲染dom节点
onMounted(()=>{
  canvasDom.value.appendChild(renderer.domElement)
  // 初始化渲染背景
  renderer.setClearColor("#000")
  scene.background = new THREE.Color("#ccc")
  scene.enviroment - new THREE.Color("#ccc")
  render() // 渲染函数
  // 添加地面网格
  const gridHelper = new THREE.GridHelper(10,10)
  gridHelper.material.opacity = 0.2
  gridHelper.material.transparent = true
  scene.add(gridHelper)

  // 创建轨道控制器
  controls = new OrbitControls(camera,renderer.domElement)
  controls.update()

  // 添加汽车模型 gltf
  // 实例化gltf载入库
  const loader = new GLTFLoader();
  // 实例化draco载入库
  const dracoLoader = new DRACOLoader();
  // 添加draco载入库
  dracoLoader.setDecoderPath("./draco/gltf/");
  // 添加draco载入库
  loader.setDRACOLoader(dracoLoader);
  // 加载模型
  loader.load("./model/bmw01.glb", (gltf) => {
    const cartMedul = gltf.scene
    cartMedul.traverse((child)=>{
      // if ( child.isMesh ) { // 是否为物体
      //   console.log("child",child.name);
      // }
      // 判断是否为轮毂
      if (child.isMesh && child.name.includes('轮毂')  ) {
        child.material = wheelsMaterial
        wheels.push(child)
      }
      // 判断是否为车身
      if (child.isMesh && child.name.includes('Mesh002')  ) {
        child.material = cartMaterial
        cartBody = child
      }
      // 判断是否为前脸
      if (child.isMesh && child.name.includes('前脸') ) {
        child.material = frontMaterial
        frontCar = child
      }
      // 判断是否为引擎盖
      if (child.isMesh && child.name.includes('引擎盖_1') ) {
        child.material = hoodMaterial
        hoodCar = child
      }
      // 判断是否为挡风玻璃
      if (child.isMesh && child.name.includes('挡风玻璃') ) {
        child.material = glassMaterial
        glassCar = child
      }


    })
    //设置模型大小
    // medul.scale.set(0.1, 0.1, 0.1);
    // medul.position.set(0,-1,0)
    // medul.rotation.y = Math.PI / 2
    cartMedul.material = new THREE.MeshPhongMaterial({
      color:0xfffff,
      // envMap:bgTexture,
      refractionRatio:0.7, // 折射率
      reflectivity:0.99, // 反射率
    })
    scene.add(cartMedul)
  });

  // 添加平行光 6个方向都添加灯光
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(0, 0, 10); // z轴正前方的灯光
  scene.add(light1);
  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10); // z轴负前方的灯光
  scene.add(light2);
  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(0, 10, 0); // y轴正前方的灯光
  scene.add(light3);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(0, -10, 0); // y轴负前方的灯光
  scene.add(light4);
  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light5.position.set(10, 0, 0); // x轴负前方的灯光
  scene.add(light5);
  const light6 = new THREE.DirectionalLight(0xffffff, 1);
  light6.position.set(-10, 0, 0); // x轴负前方的灯光
  scene.add(light6);

  // 设置控制器阻尼，让控制器更具有真是效果
  // controls.enableDamping = true
})
</script>

<style lang="less" scoped>
* {
  padding:0;
  margin: 0;
}
.home {
  height:100;
  width:100%;
  background:'#f0f0f0';
  overflow: hidden;
}
.home-content {
  position: fixed;
  top: 0;
  right: 20px;
}

.select-item-color {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
  border-radius: 10px;
}
.select {
  display: flex;
}

</style>