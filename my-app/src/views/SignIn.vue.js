/* __placeholder__ */
import { supabase } from '@/lib/supabaseClient.js';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let username = ref('');
let password = ref('');
async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: username.value,
        password: password.value,
        options: {
            data: {
                username: username.value
            }
        }
    });
    console.log(error);
    if (error === null) {
        console.log("whatthesigma");
        location.reload();
    }
    else {
        alert(error.message);
    }
}
let list = [];
async function getUserData() {
    const user = (await supabase.auth.getUser()).data.user.id;
    console.log(user);
}
async function signOutCurrentUser() {
    await supabase.auth.signOut();
    location.reload();
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.input;
    __VLS_intrinsicElements.input;
    __VLS_intrinsicElements.input;
    __VLS_intrinsicElements.input;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("container"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("form-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("form-container"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["form"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: ("positionForm"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("positionForm"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["label"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, for: ("hi"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, for: ("hi"), }));
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_20 = __VLS_intrinsicElements["input"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, required: (true), }));
                    (__VLS_ctx.username);
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = __VLS_intrinsicElements["label"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, for: ("hello"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, for: ("hello"), }));
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_30 = __VLS_intrinsicElements["input"];
                    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                    const __VLS_32 = __VLS_31({ ...{}, type: ("password"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, type: ("password"), required: (true), }));
                    (__VLS_ctx.password);
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_35 = __VLS_intrinsicElements["input"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{ 'onClick': {}, }, type: ("submit"), value: ("Submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{ 'onClick': {}, }, type: ("submit"), value: ("Submit"), }));
                    let __VLS_40 = { 'click': __VLS_pickEvent(__VLS_39['click'], {}.onClick) };
                    __VLS_40 = { click: (__VLS_ctx.signInWithEmail) };
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    let __VLS_39;
                }
                {
                    const __VLS_41 = __VLS_intrinsicElements["input"];
                    const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                    const __VLS_43 = __VLS_42({ ...{ 'onClick': {}, }, type: ("button"), value: ("Sign Out"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{ 'onClick': {}, }, type: ("button"), value: ("Sign Out"), }));
                    let __VLS_46 = { 'click': __VLS_pickEvent(__VLS_45['click'], {}.onClick) };
                    __VLS_46 = { click: (__VLS_ctx.signOutCurrentUser) };
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                    let __VLS_45;
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["form-container"];
        __VLS_styleScopedClasses["positionForm"];
    }
    var __VLS_slots;
    // @ts-ignore
    [username, password, signInWithEmail, signOutCurrentUser,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            username: username,
            password: password,
            signInWithEmail: signInWithEmail,
            signOutCurrentUser: signOutCurrentUser,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
