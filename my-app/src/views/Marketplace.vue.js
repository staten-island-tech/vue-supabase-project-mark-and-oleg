/* __placeholder__ */
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import ModelBox from "@/components/ModelBox.vue";
import { boxesList } from '@/stores/boxes';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let totalmarketvalue = ref(0);
let usermarket = ref([]);
async function rizz() {
    totalmarketvalue.value = 0;
    const { data } = await supabase.from('usermarket').select();
    if (data) {
        data.forEach((val) => {
            totalmarketvalue.value += val.sellPrice;
        });
        usermarket.value = data;
    }
}
async function buyOffMarket(fard) {
    let productId = fard.uuid;
    await supabase
        .from('usermarket')
        .delete()
        .eq('uuid', productId);
    const userData = await supabase.auth.getUser();
    if (userData.data?.user) {
        const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
        if (oldSigmaData && oldSigmaData.length > 0) {
            let inventory = oldSigmaData[0].inventory;
            inventory.push(fard);
            await supabase
                .from('userdata')
                .update({ inventory })
                .eq('uuid', userData.data.user.id);
        }
    }
    rizz();
}
onMounted(() => {
    rizz();
});
async function buyBox(box) {
    const userData = await supabase.auth.getUser();
    if (userData.data?.user) {
        const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
        if (oldSigmaData && oldSigmaData.length > 0) {
            let inventory = oldSigmaData[0].inventory;
            inventory.push(box);
            await supabase.from('userdata').update({ inventory }).eq('uuid', userData.data.user.id);
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
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    __VLS_components.ModelBox;
    // @ts-ignore
    [ModelBox, ModelBox, ModelBox, ModelBox, ModelBox, ModelBox,];
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("skibidi"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("skibidi"), }));
        for (const [box] of __VLS_getVForSourceType((__VLS_ctx.boxesList))) {
            {
                const __VLS_5 = __VLS_intrinsicElements["div"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, class: ("card"), key: ((box.item)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, class: ("card"), key: ((box.item)), }));
                {
                    const __VLS_10 = __VLS_intrinsicElements["h2"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, }));
                    (box.item);
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: ("model-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: ("model-container"), }));
                    if (box.rarity === 'common') {
                        {
                            const __VLS_20 = {}.ModelBox;
                            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("common-model"), }));
                            ({}.ModelBox);
                            const __VLS_22 = __VLS_21({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("common-model"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                            ({}({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("common-model"), }));
                            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                        }
                        // @ts-ignore
                        [boxesList,];
                    }
                    if (box.rarity === 'uncommon') {
                        {
                            const __VLS_25 = {}.ModelBox;
                            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("uncommon-model"), }));
                            ({}.ModelBox);
                            const __VLS_27 = __VLS_26({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("uncommon-model"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("uncommon-model"), }));
                            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                        }
                    }
                    if (box.rarity === 'rare') {
                        {
                            const __VLS_30 = {}.ModelBox;
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("rare-model"), }));
                            ({}.ModelBox);
                            const __VLS_32 = __VLS_31({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("rare-model"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("rare-model"), }));
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                    }
                    if (box.rarity === 'epic') {
                        {
                            const __VLS_35 = {}.ModelBox;
                            const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("epic-model"), }));
                            ({}.ModelBox);
                            const __VLS_37 = __VLS_36({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("epic-model"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                            ({}({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("epic-model"), }));
                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                        }
                    }
                    if (box.rarity === 'legendary') {
                        {
                            const __VLS_40 = {}.ModelBox;
                            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("leg-model"), }));
                            ({}.ModelBox);
                            const __VLS_42 = __VLS_41({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("leg-model"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({}({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("leg-model"), }));
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                        }
                    }
                    if (box.rarity === 'exotic') {
                        {
                            const __VLS_45 = {}.ModelBox;
                            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("exotic-model"), }));
                            ({}.ModelBox);
                            const __VLS_47 = __VLS_46({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("exotic-model"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                            ({}({ ...{}, box: ((box)), rarity: ((box.rarity)), class: ("exotic-model"), }));
                            const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                        }
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_50 = __VLS_intrinsicElements["button"];
                    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                    const __VLS_52 = __VLS_51({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{ 'onClick': {}, }, }));
                    let __VLS_55 = { 'click': __VLS_pickEvent(__VLS_54['click'], {}.onClick) };
                    __VLS_55 = { click: $event => {
                            __VLS_ctx.buyBox(box);
                            // @ts-ignore
                            [buyBox,];
                        }
                    };
                    (__VLS_53.slots).default;
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                    let __VLS_54;
                }
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_56 = __VLS_intrinsicElements["div"];
        const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
        const __VLS_58 = __VLS_57({ ...{}, class: ("mart"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        ({}({ ...{}, class: ("mart"), }));
        {
            const __VLS_61 = __VLS_intrinsicElements["h1"];
            const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
            const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
            ({}({ ...{}, }));
            (__VLS_64.slots).default;
            const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
        }
        {
            const __VLS_66 = __VLS_intrinsicElements["h2"];
            const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
            const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
            ({}({ ...{}, }));
            (__VLS_ctx.totalmarketvalue);
            (__VLS_69.slots).default;
            const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        }
        {
            const __VLS_71 = __VLS_intrinsicElements["div"];
            const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
            const __VLS_73 = __VLS_72({ ...{}, class: ("gyatt"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
            ({}({ ...{}, class: ("gyatt"), }));
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.usermarket))) {
                {
                    const __VLS_76 = __VLS_intrinsicElements["div"];
                    const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
                    const __VLS_78 = __VLS_77({ ...{}, class: ("usermarket"), key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
                    ({}({ ...{}, class: ("usermarket"), key: ((item.id)), }));
                    (item.item);
                    (item.sellPrice);
                    {
                        const __VLS_81 = __VLS_intrinsicElements["button"];
                        const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
                        const __VLS_83 = __VLS_82({ ...{ 'onClick': {}, }, class: ("munt"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
                        ({}({ ...{ 'onClick': {}, }, class: ("munt"), }));
                        let __VLS_86 = { 'click': __VLS_pickEvent(__VLS_85['click'], {}.onClick) };
                        __VLS_86 = { click: $event => {
                                __VLS_ctx.buyOffMarket(item);
                                // @ts-ignore
                                [totalmarketvalue, usermarket, buyOffMarket,];
                            }
                        };
                        (__VLS_84.slots).default;
                        const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
                        let __VLS_85;
                    }
                    (__VLS_79.slots).default;
                    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
                }
            }
            (__VLS_74.slots).default;
            const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
        }
        (__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["skibidi"];
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["model-container"];
        __VLS_styleScopedClasses["common-model"];
        __VLS_styleScopedClasses["uncommon-model"];
        __VLS_styleScopedClasses["rare-model"];
        __VLS_styleScopedClasses["epic-model"];
        __VLS_styleScopedClasses["leg-model"];
        __VLS_styleScopedClasses["exotic-model"];
        __VLS_styleScopedClasses["mart"];
        __VLS_styleScopedClasses["gyatt"];
        __VLS_styleScopedClasses["usermarket"];
        __VLS_styleScopedClasses["munt"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ModelBox: ModelBox,
            boxesList: boxesList,
            totalmarketvalue: totalmarketvalue,
            usermarket: usermarket,
            buyOffMarket: buyOffMarket,
            buyBox: buyBox,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
