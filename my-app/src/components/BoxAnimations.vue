<template>
    <div ref="container"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
  let scene, camera, renderer, mixer;
  
  const container = ref(null);
  
  onMounted(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
  
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.value.appendChild(renderer.domElement);
  
    const controls = new OrbitControls(camera, renderer.domElement);
  
    const loader = new GLTFLoader();
    loader.load(
      './SkibAnimation.glb',
      function (gltf) {
        const model = gltf.scene;
        scene.add(model);
  
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
  
        animate();
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  
    function animate() {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.01);
      controls.update();
      renderer.render(scene, camera);
    }
  });
  
  onBeforeUnmount(() => {
    renderer.dispose();
  });
  
  export function pauseAnimation() {
    if (mixer) mixer.timeScale = 0; 
  }
  </script>
  
  <style scoped>
  </style>
  