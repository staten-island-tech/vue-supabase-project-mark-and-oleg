/* __placeholder__ */
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const friendsList = ref([]);
const showGui = ref(false);
const selectedFriend = ref('');
async function loadFriends() {
    const userData = await supabase.auth.getUser();
    const userId = userData?.data?.user?.id;
    if (userId) {
        const { data, error } = await supabase
            .from('userdata')
            .select('friends')
            .eq('uuid', userId);
        if (error) {
            console.error('Error fetching friends:', error.message);
        }
        else {
            friendsList.value = data?.[0]?.friends || [];
        }
    }
}
function openGUI(friend) {
    selectedFriend.value = friend;
    showGui.value = true;
}
function closeGUI() {
    showGui.value = false;
}
loadFriends();
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["h1"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["h2"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, }));
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        for (const [friend, index] of __VLS_getVForSourceType((__VLS_ctx.friendsList))) {
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, key: ((index)), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["h2"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, }));
                    (friend);
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = __VLS_intrinsicElements["button"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{ 'onClick': {}, }, }));
                    let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], {}.onClick) };
                    __VLS_30 = { click: $event => {
                            __VLS_ctx.openGUI(friend);
                            // @ts-ignore
                            [friendsList, openGUI,];
                        }
                    };
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    let __VLS_29;
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (__VLS_ctx.showGui) {
        {
            const __VLS_31 = __VLS_intrinsicElements["div"];
            const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
            const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
            ({}({ ...{}, }));
            {
                const __VLS_36 = __VLS_intrinsicElements["div"];
                const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                const __VLS_38 = __VLS_37({ ...{}, class: ("gui-overlay"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({ ...{}, class: ("gui-overlay"), }));
                {
                    const __VLS_41 = __VLS_intrinsicElements["div"];
                    const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                    const __VLS_43 = __VLS_42({ ...{}, class: ("gui"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{}, class: ("gui"), }));
                    {
                        const __VLS_46 = __VLS_intrinsicElements["h2"];
                        const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                        const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                        ({}({ ...{}, }));
                        (__VLS_49.slots).default;
                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    }
                    {
                        const __VLS_51 = __VLS_intrinsicElements["h3"];
                        const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
                        const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                        ({}({ ...{}, }));
                        (__VLS_ctx.selectedFriend);
                        (__VLS_54.slots).default;
                        const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                    }
                    {
                        const __VLS_56 = __VLS_intrinsicElements["button"];
                        const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                        const __VLS_58 = __VLS_57({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                        ({}({ ...{ 'onClick': {}, }, }));
                        let __VLS_61 = { 'click': __VLS_pickEvent(__VLS_60['click'], {}.onClick) };
                        __VLS_61 = { click: (__VLS_ctx.closeGUI) };
                        (__VLS_59.slots).default;
                        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                        let __VLS_60;
                    }
                    (__VLS_44.slots).default;
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                }
                (__VLS_39.slots).default;
                const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
            }
            (__VLS_34.slots).default;
            const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
        }
        // @ts-ignore
        [showGui, selectedFriend, closeGUI,];
    }
    {
        const __VLS_62 = __VLS_intrinsicElements["div"];
        const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
        const __VLS_64 = __VLS_63({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
        ({}({ ...{}, }));
        {
            const __VLS_67 = __VLS_intrinsicElements["h1"];
            const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
            const __VLS_69 = __VLS_68({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
            ({}({ ...{}, }));
            (__VLS_70.slots).default;
            const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
        }
        (__VLS_65.slots).default;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["gui-overlay"];
        __VLS_styleScopedClasses["gui"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            friendsList: friendsList,
            showGui: showGui,
            selectedFriend: selectedFriend,
            openGUI: openGUI,
            closeGUI: closeGUI,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
