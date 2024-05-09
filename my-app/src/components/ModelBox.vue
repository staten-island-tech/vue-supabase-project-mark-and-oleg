<template>
    <div>

    </div>
</template>

<script setup>
import * as THREE from 'three';
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { boxesList } from '@/stores/boxes.ts'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';




const group = new THREE.Group();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 300 / 300, 0.1, 1000 );
camera.position.set(-30, 0, 30);


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.update();


group.add(camera)
group.add(renderer)



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

</script>

<style lang="scss" scoped>

</style>