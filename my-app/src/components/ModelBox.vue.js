/* __placeholder__ */
import * as THREE from 'three';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    const ambientLight = new THREE.AmbientLight(0x404040, 100);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.target.position.set(0, 0, 0);
    scene.add(directionalLight);
    scene.add(directionalLight.target);
    loadCrateModel(props.rarity);
    function animate() {
        if (!isMounted)
            return;
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
            modelPath = './SkibRare.glb';
            break;
        case 'epic':
            modelPath = './SkibEpic.glb';
            break;
        case 'legendary':
            modelPath = './legcrate.glb';
            break;
        case 'exotic':
            modelPath = './SkibExotic.glb';
            break;
    }
    loader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        const bbox = new THREE.Box3().setFromObject(model);
        const center = bbox.getCenter(new THREE.Vector3());
        model.position.sub(center);
        scene.add(model);
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    }, function (error) {
        console.error(error);
    });
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
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, ref: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, ref: ("container"), }));
            // @ts-ignore
            (__VLS_ctx.container);
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [container,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            container: container,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
