<template>
    <div>
        <div ref="container"></div>
    </div>
</template>

<script setup>
import * as THREE from 'three';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-30, 0, 30);
const container = ref(null);
let renderer = null;

const initThree = () => {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (container.value) {
        container.value.appendChild(renderer.domElement);
    }

    // Initialize scene, camera, etc.
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
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
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
};

const destroyThree = () => {
    if (renderer && renderer.domElement) {
        if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer.dispose(); // Dispose renderer
        renderer = null; // Reset renderer variable
        // Dispose or clean up other resources
    }
};

onMounted(() => {
    initThree();
});

onBeforeUnmount(() => {
    destroyThree();
});
</script>

<style lang="scss" scoped>

</style>
