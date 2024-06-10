/* __placeholder__ */
import AuthUser from "../components/AuthUser.vue";
import { supabase } from '@/lib/supabaseClient';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
async function sendFriendRequest(receiverId) {
    const userData = await supabase.auth.getUser();
    if (userData && userData.data && userData.data.user) {
        const userId = userData.data.user.id;
        console.log(userId);
        let currentFriends = await supabase.from('userdata').select().eq('uuid', userId);
        const { data, error } = await supabase
            .from('friendrequests')
            .insert([{ senderId: userId, receiverId: receiverId }]);
        if (error) {
            console.error('Error sending friend request:', error.message);
        }
    }
    else {
        console.error('User data is null or invalid.');
    }
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
    __VLS_intrinsicElements.main;
    __VLS_intrinsicElements.main;
    __VLS_components.AuthUser;
    __VLS_components.AuthUser;
    // @ts-ignore
    [AuthUser,];
    {
        const __VLS_0 = __VLS_intrinsicElements["main"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.AuthUser;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
            ({}.AuthUser);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            AuthUser: AuthUser,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
