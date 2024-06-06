<template>
    <div>
        <div ref="container" class="skibidi"></div>
    </div>
</template>

<script setup>
import * as THREE from 'three';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const props = defineProps({
    rarity: {
        type: String,
        required: true
    }
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-15, 5, 5);
const container = ref(null);
let renderer = null;
let isMounted = true;

const initThree = () => {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(480, 270);
    if (container.value) {
        container.value.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 7;
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enableDamping = true;

    controls.update();

    const light = new THREE.AmbientLight(0x404040, 100);
    scene.add(light);

    loadCrateModel(props.rarity);

    function animate() {
        if (!isMounted) return; 
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
};

const loadCrateModel = (rarity) => {
    const loader = new GLTFLoader();
    let modelPath;

    switch (rarity) {
        case 'common':
            modelPath = './SkibCommon.glb';
            break;
        case 'uncommon':
            modelPath = './SkibUncommon.glb';
            break;
        case 'rare':
            modelPath = './SkibiCommon.glb';
            break;
        // default:
        //     modelPath = './SkibiDefault.glb';
        //     break;
    }

    loader.load(
        modelPath,
        function (gltf) {
            const model = gltf.scene;
            const bbox = new THREE.Box3().setFromObject(model);
            const center = bbox.getCenter(new THREE.Vector3());
            model.position.sub(center);

            const scaleFactor = 0.5;
            model.scale.set(scaleFactor, scaleFactor, scaleFactor);

            scene.add(model);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );
};

const destroyThree = () => {
    isMounted = false; 
    if (renderer && renderer.domElement) {
        if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer.dispose(); 
        renderer = null; 
    }
};

onMounted(() => {
    isMounted = true; 
    initThree();
});

onBeforeUnmount(() => {
    destroyThree();
});

watch(() => props.rarity, (newRarity) => {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    loadCrateModel(newRarity);
});
</script>

<<<<<<< Updated upstream
<style lang="scss" scoped>




=======
<style scoped>
.skibidi{
    height: 500px;
}
>>>>>>> Stashed changes
</style>
