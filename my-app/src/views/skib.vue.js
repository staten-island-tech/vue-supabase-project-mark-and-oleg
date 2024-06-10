/* __placeholder__ */
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { useRoute } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let rizzler = ref(null);
let skib = ref(false);
const fard = ref({});
async function tio() {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.error('Error getting user:', error.message);
        return;
    }
    rizzler.value = data ? { data: data } : null;
}
tio();
const route = useRoute();
async function sendFriendRequest(receiverId, senderId) {
    if (!receiverId || !senderId) {
        console.error('Receiver ID or Sender ID is undefined.');
        return;
    }
    const { error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: senderId, receiverId: receiverId }]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}
const getURL = async () => {
    let poopy = route.params.id;
    const { data, error } = await supabase
        .from('userdata')
        .select()
        .eq('alias', poopy);
    if (error) {
        console.error('Error fetching user data:', error.message);
        return;
    }
    if (data.length > 0) {
        fard.value = data[0];
        skib.value = true;
    }
    else {
        fard.value = { alias: 'no people found' };
    }
};
onMounted(async () => {
    await getURL();
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
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    if (__VLS_ctx.skib) {
        {
            const __VLS_0 = __VLS_intrinsicElements["div"];
            const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
            const __VLS_2 = __VLS_1({ ...{}, class: ("fart"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("fart"), }));
            {
                const __VLS_5 = __VLS_intrinsicElements["h1"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, }));
                (__VLS_ctx.fard.alias);
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            {
                const __VLS_10 = __VLS_intrinsicElements["h2"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                (__VLS_ctx.fard.friends);
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["h3"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                (__VLS_ctx.fard.inventory);
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_20 = __VLS_intrinsicElements["button"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{ 'onClick': {}, }, }));
                let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], {}.onClick) };
                __VLS_25 = { click: $event => {
                        if (!((__VLS_ctx.skib)))
                            return;
                        __VLS_ctx.sendFriendRequest(__VLS_ctx.fard.uuid, __VLS_ctx.rizzler?.data?.user?.id);
                        // @ts-ignore
                        [skib, fard, fard, fard, sendFriendRequest, fard, rizzler,];
                    }
                };
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                let __VLS_24;
            }
            (__VLS_3.slots).default;
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["fart"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            rizzler: rizzler,
            skib: skib,
            fard: fard,
            sendFriendRequest: sendFriendRequest,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
