/* __placeholder__ */
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';
import FriendRequests from '@/components/FriendRequests.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const friendReqs = ref();
async function callFriendRequests() {
    const userData = await supabase.auth.getUser();
    const { data } = await supabase
        .from('friendrequests')
        .select('senderId')
        .eq('receiverId', userData.data.user.id);
    if (data.length > 0) {
        console.log('felch');
        friendReqs.value = data;
    }
    else {
        friendReqs.value = ['No Friend Requests'];
        console.log('felch');
    }
}
let sibidi = ref([]);
async function getUsernameFriendRequests() {
    await callFriendRequests();
    sibidi.value = [];
    console.log(friendReqs.value[0]);
    for (let i = 0; i < friendReqs.value.length; i++) {
        const { data, error } = await supabase
            .from('userdata')
            .select('username')
            .eq('uuid', friendReqs.value[i].senderId);
        console.log(data, error);
        sibidi.value.push(data[0].username);
    }
    friendReqs.value = sibidi.value;
    console.log(friendReqs.value, sibidi.value);
}
onMounted(() => {
    callFriendRequests();
});
const GUI = ref(false);
let loaded = ref(false);
async function openGui() {
    loaded.value = false;
    GUI.value = !GUI.value;
    await callFriendRequests();
    loaded.value = true;
    console.log(GUI.value);
}
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
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_components.FriendRequests;
    __VLS_components.FriendRequests;
    // @ts-ignore
    [FriendRequests,];
    {
        const __VLS_0 = __VLS_intrinsicElements["button"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {}, }, }));
        let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], {}.onClick) };
        __VLS_5 = { click: (__VLS_ctx.openGui) };
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    if (__VLS_ctx.GUI) {
        for (const [request] of __VLS_getVForSourceType((__VLS_ctx.friendReqs))) {
            {
                const __VLS_6 = __VLS_intrinsicElements["div"];
                const __VLS_7 = __VLS_elementAsFunctionalComponent(__VLS_6);
                const __VLS_8 = __VLS_7({ ...{}, class: ("sploingus"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
                ({}({ ...{}, class: ("sploingus"), }));
                if (!__VLS_ctx.loaded) {
                    {
                        const __VLS_11 = __VLS_intrinsicElements["h1"];
                        const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
                        const __VLS_13 = __VLS_12({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
                        ({}({ ...{}, }));
                        (__VLS_14.slots).default;
                        const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
                    }
                    // @ts-ignore
                    [openGui, GUI, friendReqs, loaded,];
                }
                (request);
                {
                    const __VLS_16 = {}.FriendRequests;
                    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, munt: ((request.senderId)), }));
                    ({}.FriendRequests);
                    const __VLS_18 = __VLS_17({ ...{}, munt: ((request.senderId)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
                    ({}({ ...{}, munt: ((request.senderId)), }));
                    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
                }
                (__VLS_9.slots).default;
                const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
            }
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["sploingus"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            FriendRequests: FriendRequests,
            friendReqs: friendReqs,
            GUI: GUI,
            loaded: loaded,
            openGui: openGui,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
