/* __placeholder__ */
import { supabase } from '@/lib/supabaseClient.js';
import { ref, onMounted } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    munt: String
});
const userId = ref();
async function rizztoilet() {
    const userData = await supabase.auth.getUser();
    userId.value = userData.data.user.id;
}
async function fart() {
    let requestId = await supabase.from('friendrequests').select().eq('senderId', 'b586d532-4c7d-4f4a-a9e2-079208d166f2').eq('receiverId', userId.value);
    console.log(requestId.data[0].requestId);
}
onMounted(() => {
    rizztoilet();
});
async function sendFriendRequest(receiverId, senderId) {
    let currentFriends = await supabase.from('userdata').select().eq('uuid', senderId);
    console.log(userId);
    const { data, error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: senderId, receiverId: receiverId }]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}
async function acceptFriendRequest(senderId, receiverId) {
    let requestId = await supabase.from('friendrequests').select().eq('senderId', senderId).eq('receiverId', userId.value);
    console.log(requestId.data[0].requestId);
    const { data, error } = await supabase
        .from('friendrequests')
        .delete()
        .eq('requestId', requestId.data[0].requestId);
    if (error) {
        console.error('Error accepting friend request:', error.message);
    }
    await addFriend(senderId, receiverId);
    await addFriend(receiverId, senderId);
}
async function rejectFriendRequest(requestId) {
    const { data, error } = await supabase
        .from('friend_requests')
        .update({ status: 'rejected' })
        .eq('id', requestId);
    if (error) {
        console.error('Error rejecting friend request:', error.message);
    }
}
async function addFriend(receiverId, senderId) {
    let callreq = await supabase
        .from('userdata')
        .select('friends')
        .eq('uuid', receiverId);
    console.log(callreq.data[0]);
    let userFriends = callreq.data[0].friends;
    let senderUsername = await supabase
        .from('userdata')
        .select('username')
        .eq('uuid', senderId);
    userFriends.push(senderId);
    await supabase
        .from('userdata')
        .update([{ friends: userFriends }])
        .eq('uuid', receiverId);
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
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    {
        const __VLS_0 = __VLS_intrinsicElements["button"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {}, }, }));
        let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], {}.onClick) };
        __VLS_5 = { click: $event => {
                __VLS_ctx.acceptFriendRequest(__VLS_ctx.munt, __VLS_ctx.userId);
                // @ts-ignore
                [acceptFriendRequest, munt, userId,];
            }
        };
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_4;
    }
    {
        const __VLS_6 = __VLS_intrinsicElements["button"];
        const __VLS_7 = __VLS_elementAsFunctionalComponent(__VLS_6);
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ 'onClick': {}, }, }));
        let __VLS_11 = { 'click': __VLS_pickEvent(__VLS_10['click'], {}.onClick) };
        __VLS_11 = { click: (__VLS_ctx.fart) };
        (__VLS_9.slots).default;
        const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        let __VLS_10;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [fart,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            userId: userId,
            fart: fart,
            acceptFriendRequest: acceptFriendRequest,
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
