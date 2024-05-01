<script setup lang="ts">

import * as THREE from 'three';
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { boxesList } from '@/stores/boxes.ts'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';





const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(-30, 0, 30);


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.update();




const light = new THREE.AmbientLight(0x404040, 100);
scene.add(light);

const loader = new GLTFLoader();

let model;

loader.load(
    './Skibi.glb',
    function (gltf) {
        model = gltf.scene;
        const bbox = new THREE.Box3().setFromObject(model);
        const center = bbox.getCenter(new THREE.Vector3());
        model.position.sub(center);
        scene.add(model);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();


function felch(x){
  setTimeout(()=> fanum(x), 2500)
}

async function fanum(x) {
  const userData = await supabase.auth.getUser()
  console.log(userData)
  const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id)
  let fartArr = oldSigmaData.data[0].inventory
  fartArr.push(x)
  console.log(fartArr)
  
  await supabase
    .from('userdata')
    .update({ inventory: fartArr})
    .eq('uuid', userData.data.user.id)
}

const countries = ref([])
  async function getCountries() {
    const { data } = await supabase.from('usermarket').select()
    countries.value = data
    console.log(countries.value)
  }

</script>

<template>
  <div class="boxes" v-for="boxes in boxesList">
    <h2>{{ boxes.item }}</h2>

    <button @click="felch(boxes)">buy box</button>
  </div>
  <h1>USER MARKETPLACE</h1>
</template>

<style scoped>
.positionForm{
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
}
</style>
