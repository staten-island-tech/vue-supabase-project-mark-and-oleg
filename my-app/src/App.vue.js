/* __placeholder__ */
import { RouterLink, RouterView } from 'vue-router';
import UserInbox from '@/components/UserInbox.vue';
import { supabase } from '@/lib/supabaseClient';
import { ref, onMounted } from 'vue';
import Searchbar from '@/components/Searchbar.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let sigma = ref(false);
let rizzler = null;
async function unc() {
    const userData = await supabase.auth.getUser();
    if (userData && userData.error === null) {
        sigma.value = true;
        rizzler = userData.data.user;
    }
}
onMounted(() => {
    unc();
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink,];
    __VLS_intrinsicElements.img;
    __VLS_components.Searchbar;
    __VLS_components.Searchbar;
    // @ts-ignore
    [Searchbar,];
    __VLS_components.UserInbox;
    __VLS_components.UserInbox;
    // @ts-ignore
    [UserInbox,];
    __VLS_components.RouterView;
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    if (__VLS_ctx.sigma && __VLS_ctx.rizzler) {
        {
            const __VLS_0 = __VLS_intrinsicElements["div"];
            const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
            const __VLS_2 = __VLS_1({ ...{}, class: ("alert"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("alert"), }));
            {
                const __VLS_5 = __VLS_intrinsicElements["h2"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, class: ("sigma"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, class: ("sigma"), }));
                (__VLS_ctx.rizzler.user_metadata.alias);
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            (__VLS_3.slots).default;
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        // @ts-ignore
        [sigma, rizzler, rizzler,];
    }
    if (!__VLS_ctx.sigma) {
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, }));
            {
                const __VLS_15 = __VLS_intrinsicElements["button"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: ("button-38"), }));
                {
                    const __VLS_20 = {}.RouterLink;
                    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, to: ("/"), }));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_22 = __VLS_21({ ...{}, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, to: ("/"), }));
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            {
                const __VLS_25 = __VLS_intrinsicElements["button"];
                const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                const __VLS_27 = __VLS_26({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, class: ("button-38"), }));
                {
                    const __VLS_30 = {}.RouterLink;
                    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, to: ("/signin"), }));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_32 = __VLS_31({ ...{}, to: ("/signin"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, to: ("/signin"), }));
                    (__VLS_33.slots).default;
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        // @ts-ignore
        [sigma,];
    }
    if (__VLS_ctx.sigma) {
        {
            const __VLS_35 = __VLS_intrinsicElements["div"];
            const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
            const __VLS_37 = __VLS_36({ ...{}, class: ("wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
            ({}({ ...{}, class: ("wrapper"), }));
            {
                const __VLS_40 = __VLS_intrinsicElements["div"];
                const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                const __VLS_42 = __VLS_41({ ...{}, class: ("window"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                ({}({ ...{}, class: ("window"), }));
                {
                    const __VLS_45 = __VLS_intrinsicElements["img"];
                    const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                    const __VLS_47 = __VLS_46({ ...{}, src: ("https://upload.wikimedia.org/wikipedia/commons/3/34/Transparent_Background_Dromedary_Camel.png"), class: ("fard"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                    ({}({ ...{}, src: ("https://upload.wikimedia.org/wikipedia/commons/3/34/Transparent_Background_Dromedary_Camel.png"), class: ("fard"), }));
                    const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                }
                {
                    const __VLS_50 = __VLS_intrinsicElements["h2"];
                    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                    const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, }));
                    (__VLS_53.slots).default;
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                (__VLS_43.slots).default;
                const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
            }
            {
                const __VLS_55 = __VLS_intrinsicElements["button"];
                const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                const __VLS_57 = __VLS_56({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                ({}({ ...{}, class: ("button-38"), }));
                {
                    const __VLS_60 = {}.RouterLink;
                    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, to: ("/"), }));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_62 = __VLS_61({ ...{}, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                    ({}({ ...{}, to: ("/"), }));
                    (__VLS_63.slots).default;
                    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                }
                (__VLS_58.slots).default;
                const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
            }
            {
                const __VLS_65 = __VLS_intrinsicElements["button"];
                const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                const __VLS_67 = __VLS_66({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}({ ...{}, class: ("button-38"), }));
                {
                    const __VLS_70 = {}.RouterLink;
                    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, to: ("/market"), }));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_72 = __VLS_71({ ...{}, to: ("/market"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                    ({}({ ...{}, to: ("/market"), }));
                    (__VLS_73.slots).default;
                    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                }
                (__VLS_68.slots).default;
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
            {
                const __VLS_75 = {}.Searchbar;
                const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, }));
                ({}.Searchbar);
                const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                ({}({ ...{}, }));
                const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
            }
            {
                const __VLS_80 = __VLS_intrinsicElements["button"];
                const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
                const __VLS_82 = __VLS_81({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                ({}({ ...{}, class: ("button-38"), }));
                {
                    const __VLS_85 = {}.RouterLink;
                    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, to: ("/profile"), }));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_87 = __VLS_86({ ...{}, to: ("/profile"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                    ({}({ ...{}, to: ("/profile"), }));
                    (__VLS_88.slots).default;
                    const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                }
                (__VLS_83.slots).default;
                const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
            }
            {
                const __VLS_90 = __VLS_intrinsicElements["button"];
                const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                const __VLS_92 = __VLS_91({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                ({}({ ...{}, class: ("button-38"), }));
                {
                    const __VLS_95 = {}.RouterLink;
                    const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, to: ("/signin"), }));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_97 = __VLS_96({ ...{}, to: ("/signin"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                    ({}({ ...{}, to: ("/signin"), }));
                    (__VLS_98.slots).default;
                    const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                }
                (__VLS_93.slots).default;
                const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
            }
            (__VLS_38.slots).default;
            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
        }
        // @ts-ignore
        [sigma,];
    }
    {
        const __VLS_100 = __VLS_intrinsicElements["button"];
        const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
        const __VLS_102 = __VLS_101({ ...{}, class: ("button-38"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        ({}({ ...{}, class: ("button-38"), }));
        {
            const __VLS_105 = {}.UserInbox;
            const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{}, }));
            ({}.UserInbox);
            const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
            ({}({ ...{}, }));
            const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
        }
        (__VLS_103.slots).default;
        const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
    }
    {
        const __VLS_110 = {}.RouterView;
        const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{}, }));
        ({}.RouterView);
        const __VLS_112 = __VLS_111({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
        ({}({ ...{}, }));
        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["alert"];
        __VLS_styleScopedClasses["sigma"];
        __VLS_styleScopedClasses["button-38"];
        __VLS_styleScopedClasses["button-38"];
        __VLS_styleScopedClasses["wrapper"];
        __VLS_styleScopedClasses["window"];
        __VLS_styleScopedClasses["fard"];
        __VLS_styleScopedClasses["button-38"];
        __VLS_styleScopedClasses["button-38"];
        __VLS_styleScopedClasses["button-38"];
        __VLS_styleScopedClasses["button-38"];
        __VLS_styleScopedClasses["button-38"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            RouterView: RouterView,
            UserInbox: UserInbox,
            Searchbar: Searchbar,
            sigma: sigma,
            rizzler: rizzler,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
