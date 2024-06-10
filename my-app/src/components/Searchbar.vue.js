/* __placeholder__ */
import { ref, computed } from 'vue';
import UserInbox from '@/components/UserInbox.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let val = ref();
const searchPath = computed(() => {
    return `/others/${val.value}`;
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
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.input;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    {
        const __VLS_0 = __VLS_intrinsicElements["form"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, type: ("search"), class: ("formfirst"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, type: ("search"), class: ("formfirst"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["label"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, for: ("search"), class: ("label"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, for: ("search"), class: ("label"), }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["input"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: ("search"), type: ("search"), placeholder: ("Search for sigmas..."), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("search"), type: ("search"), placeholder: ("Search for sigmas..."), required: (true), }));
            (__VLS_ctx.val);
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_15 = {}.RouterLink;
            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, to: ((__VLS_ctx.searchPath)), class: ("submitter"), }));
            ({}.RouterLink);
            ({}.RouterLink);
            const __VLS_17 = __VLS_16({ ...{}, to: ((__VLS_ctx.searchPath)), class: ("submitter"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{}, to: ((__VLS_ctx.searchPath)), class: ("submitter"), }));
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["formfirst"];
        __VLS_styleScopedClasses["label"];
        __VLS_styleScopedClasses["search"];
        __VLS_styleScopedClasses["submitter"];
    }
    var __VLS_slots;
    // @ts-ignore
    [val, searchPath, searchPath, searchPath,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            val: val,
            searchPath: searchPath,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
