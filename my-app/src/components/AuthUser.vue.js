/* __placeholder__ */
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const loading = ref(false);
const email = ref('');
const password = ref('');
const username = ref('');
async function handleLogin() {
    let audio = new Audio("skibidi2.mp3");
    audio.play();
    setTimeout(() => {
        audio.pause();
    }, 2500);
    try {
        const userData = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {
                    alias: username.value
                }
            },
        });
        if (userData && userData.data && userData.data.user) {
            await supabase
                .from('userdata')
                .insert({ uuid: userData.data.user.id, created_at: userData.data.user.created_at, inventory: [], username: email.value, password: password.value, friends: [], alias: username.value, money: 1000 });
            location.reload();
            console.log('User signed up successfully:', userData.data.user.id);
        }
        else {
            console.error('User data is null or invalid.');
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Sign-up error:', error.message);
        }
        else {
            console.error('Sign-up error:', error);
        }
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
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
            const __VLS_5 = __VLS_intrinsicElements["form"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{ 'onSubmit': {}, }, class: ("form"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{ 'onSubmit': {}, }, class: ("form"), }));
            let __VLS_10 = { 'submit': __VLS_pickEvent(__VLS_9['submit'], {}.onSubmit) };
            __VLS_10 = { submit: (__VLS_ctx.handleLogin) };
            {
                const __VLS_11 = __VLS_intrinsicElements["h1"];
                const __VLS_12 = __VLS_elementAsFunctionalComponent(__VLS_11);
                const __VLS_13 = __VLS_12({ ...{}, class: ("header"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
                ({}({ ...{}, class: ("header"), }));
                (__VLS_14.slots).default;
                const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
            }
            {
                const __VLS_16 = __VLS_intrinsicElements["p"];
                const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
                const __VLS_18 = __VLS_17({ ...{}, class: ("description"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
                ({}({ ...{}, class: ("description"), }));
                (__VLS_19.slots).default;
                const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
            }
            {
                const __VLS_21 = __VLS_intrinsicElements["div"];
                const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
                const __VLS_23 = __VLS_22({ ...{}, class: ("input-group"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                ({}({ ...{}, class: ("input-group"), }));
                {
                    const __VLS_26 = __VLS_intrinsicElements["input"];
                    const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
                    const __VLS_28 = __VLS_27({ ...{}, class: ("input-field"), required: (true), type: ("email"), placeholder: ("Your email"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                    ({}({ ...{}, class: ("input-field"), required: (true), type: ("email"), placeholder: ("Your email"), }));
                    (__VLS_ctx.email);
                    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                }
                {
                    const __VLS_31 = __VLS_intrinsicElements["input"];
                    const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
                    const __VLS_33 = __VLS_32({ ...{}, class: ("input-field"), required: (true), type: ("password"), placeholder: ("Create password"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                    ({}({ ...{}, class: ("input-field"), required: (true), type: ("password"), placeholder: ("Create password"), }));
                    (__VLS_ctx.password);
                    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                }
                {
                    const __VLS_36 = __VLS_intrinsicElements["input"];
                    const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                    const __VLS_38 = __VLS_37({ ...{}, class: ("input-field"), required: (true), type: ("text"), placeholder: ("Username"), value: ((__VLS_ctx.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                    ({}({ ...{}, class: ("input-field"), required: (true), type: ("text"), placeholder: ("Username"), value: ((__VLS_ctx.username)), }));
                    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                }
                (__VLS_24.slots).default;
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
            }
            {
                const __VLS_41 = __VLS_intrinsicElements["div"];
                const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                const __VLS_43 = __VLS_42({ ...{}, class: ("button-group"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                ({}({ ...{}, class: ("button-group"), }));
                {
                    const __VLS_46 = __VLS_intrinsicElements["input"];
                    const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                    const __VLS_48 = __VLS_47({ ...{}, type: ("submit"), class: ("button"), value: ((__VLS_ctx.loading ? 'Loading...' : 'Create Account')), disabled: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                    ({}({ ...{}, type: ("submit"), class: ("button"), value: ((__VLS_ctx.loading ? 'Loading...' : 'Create Account')), disabled: ((__VLS_ctx.loading)), }));
                    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                }
                (__VLS_44.slots).default;
                const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            let __VLS_9;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["form"];
        __VLS_styleScopedClasses["header"];
        __VLS_styleScopedClasses["description"];
        __VLS_styleScopedClasses["input-group"];
        __VLS_styleScopedClasses["input-field"];
        __VLS_styleScopedClasses["input-field"];
        __VLS_styleScopedClasses["input-field"];
        __VLS_styleScopedClasses["button-group"];
        __VLS_styleScopedClasses["button"];
    }
    var __VLS_slots;
    // @ts-ignore
    [handleLogin, email, password, username, username, loading, loading, loading, loading,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            loading: loading,
            email: email,
            password: password,
            username: username,
            handleLogin: handleLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
