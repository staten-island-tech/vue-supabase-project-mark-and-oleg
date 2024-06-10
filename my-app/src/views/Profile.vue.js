/* __placeholder__ */
import { supabase } from '@/lib/supabaseClient';
import { boxesList } from "@/stores/boxes";
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let userInv = ref([]);
let userID = ref(null);
let price = ref('');
const videoPaths = {
    common: './SkibUncommonAnimation.mkv',
    uncommon: './Skib1.mkv',
    rare: './SkibRareAnimation.mkv',
    epic: './SkibEpicAnimation.mkv',
    legendary: './SkibLegAnimation.mkv',
    exotic: './SkibExoticAnimation.mkv',
};
function playVideo(videoPath) {
    const videoElement = document.createElement('video');
    videoElement.src = videoPath;
    videoElement.autoplay = true;
    videoElement.style.position = 'fixed';
    videoElement.style.top = '50%';
    videoElement.style.left = '50%';
    videoElement.style.transform = 'translate(-50%, -50%)';
    videoElement.style.zIndex = '1000';
    videoElement.onended = () => {
        document.body.removeChild(videoElement);
    };
    document.body.appendChild(videoElement);
}
async function callUserData() {
    const { data: userData, error } = await supabase.auth.getUser();
    if (error || !userData?.user) {
        console.error("Error fetching user data:", error.message);
        return;
    }
    const { data: oldSigmaData, error: sigmaError } = await supabase
        .from('userdata')
        .select()
        .eq('uuid', userData.user.id);
    if (sigmaError) {
        console.error("Error fetching user inventory data:");
        return;
    }
    userID.value = userData.user.id;
    userInv.value = oldSigmaData[0].inventory.map((item) => ({
        ...item,
        showGui: false,
    }));
}
callUserData();
async function unbox(item) {
    try {
        const box = boxesList.value.find(b => b.item === item.item);
        if (box)
            playVideo(videoPaths[box.rarity]);
        if (item.itemType === 'crate') {
            const randomIndex = Math.floor(Math.random() * item.possibleLoot.length);
            const newItem = item.possibleLoot[randomIndex];
            const updatedInventory = userInv.value.filter(invItem => invItem !== item);
            userInv.value = updatedInventory;
            userInv.value.push(newItem);
            await supabase
                .from('userdata')
                .update({ inventory: userInv.value })
                .eq('uuid', userID.value);
        }
    }
    catch (error) {
        console.error('Error unboxing item:', error.message);
    }
}
async function sell(item) {
    const updatedInventory = userInv.value.filter(invItem => invItem !== item);
    const { data: userData, error } = await supabase.auth.getUser();
    if (error || !userData?.user) {
        console.error("Error fetching user data:", error.message);
        return;
    }
    await supabase
        .from('userdata')
        .update({ inventory: updatedInventory })
        .eq('uuid', userID.value);
    await supabase
        .from('usermarket')
        .insert({ item: item.item, itemType: item.itemType, imageLink: item.imageLink, itemrarity: item.itemrarity, sellPrice: price.value, soldBy: userData.user.email });
    userInv.value = updatedInventory;
    item.showGui = false;
}
function closeGui(item) {
    item.showGui = false;
}
function openGui(item) {
    item.showGui = true;
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
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.input;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("fortnite"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("fortnite"), }));
        for (const [skib] of __VLS_getVForSourceType((__VLS_ctx.userInv))) {
            {
                const __VLS_5 = __VLS_intrinsicElements["div"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, key: ((skib.id)), class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, key: ((skib.id)), class: ("card"), }));
                {
                    const __VLS_10 = __VLS_intrinsicElements["h1"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, }));
                    (skib.item);
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
                {
                    const __VLS_15 = __VLS_intrinsicElements["h2"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    (skib.itemrarity);
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_20 = __VLS_intrinsicElements["img"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, src: ((skib.imageLink)), class: ("munt"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, src: ((skib.imageLink)), class: ("munt"), }));
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_25 = __VLS_intrinsicElements["div"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, class: ("buttons"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, class: ("buttons"), }));
                    if (skib.itemType === 'crate') {
                        {
                            const __VLS_30 = __VLS_intrinsicElements["button"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{ 'onClick': {}, }, }));
                            let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], {}.onClick) };
                            __VLS_35 = { click: $event => {
                                    if (!((skib.itemType === 'crate')))
                                        return;
                                    __VLS_ctx.unbox(skib);
                                    // @ts-ignore
                                    [userInv, unbox,];
                                }
                            };
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                            let __VLS_34;
                        }
                    }
                    {
                        const __VLS_36 = __VLS_intrinsicElements["button"];
                        const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                        const __VLS_38 = __VLS_37({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                        ({}({ ...{ 'onClick': {}, }, }));
                        let __VLS_41 = { 'click': __VLS_pickEvent(__VLS_40['click'], {}.onClick) };
                        __VLS_41 = { click: $event => {
                                __VLS_ctx.openGui(skib);
                                // @ts-ignore
                                [openGui,];
                            }
                        };
                        (__VLS_39.slots).default;
                        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                        let __VLS_40;
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                if (skib.showGui) {
                    {
                        const __VLS_42 = __VLS_intrinsicElements["div"];
                        const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
                        const __VLS_44 = __VLS_43({ ...{}, class: ("gui"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                        ({}({ ...{}, class: ("gui"), }));
                        {
                            const __VLS_47 = __VLS_intrinsicElements["h2"];
                            const __VLS_48 = __VLS_elementAsFunctionalComponent(__VLS_47);
                            const __VLS_49 = __VLS_48({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
                            ({}({ ...{}, }));
                            (skib.item);
                            (__VLS_50.slots).default;
                            const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
                        }
                        {
                            const __VLS_52 = __VLS_intrinsicElements["p"];
                            const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
                            const __VLS_54 = __VLS_53({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
                            ({}({ ...{}, }));
                            (skib.itemType);
                            (__VLS_55.slots).default;
                            const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
                        }
                        {
                            const __VLS_57 = __VLS_intrinsicElements["p"];
                            const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
                            const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                            ({}({ ...{}, }));
                            (skib.itemrarity);
                            (__VLS_60.slots).default;
                            const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
                        }
                        {
                            const __VLS_62 = __VLS_intrinsicElements["input"];
                            const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
                            const __VLS_64 = __VLS_63({ ...{}, placeholder: ("price (NUMBERS REQUIRED)"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                            ({}({ ...{}, placeholder: ("price (NUMBERS REQUIRED)"), }));
                            (__VLS_ctx.price);
                            const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
                        }
                        {
                            const __VLS_67 = __VLS_intrinsicElements["button"];
                            const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
                            const __VLS_69 = __VLS_68({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                            ({}({ ...{ 'onClick': {}, }, }));
                            let __VLS_72 = { 'click': __VLS_pickEvent(__VLS_71['click'], {}.onClick) };
                            __VLS_72 = { click: $event => {
                                    if (!((skib.showGui)))
                                        return;
                                    __VLS_ctx.sell(skib);
                                    // @ts-ignore
                                    [price, sell,];
                                }
                            };
                            (__VLS_70.slots).default;
                            const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
                            let __VLS_71;
                        }
                        {
                            const __VLS_73 = __VLS_intrinsicElements["button"];
                            const __VLS_74 = __VLS_elementAsFunctionalComponent(__VLS_73);
                            const __VLS_75 = __VLS_74({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_74));
                            ({}({ ...{ 'onClick': {}, }, }));
                            let __VLS_78 = { 'click': __VLS_pickEvent(__VLS_77['click'], {}.onClick) };
                            __VLS_78 = { click: $event => {
                                    if (!((skib.showGui)))
                                        return;
                                    __VLS_ctx.closeGui(skib);
                                    // @ts-ignore
                                    [closeGui,];
                                }
                            };
                            (__VLS_76.slots).default;
                            const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75);
                            let __VLS_77;
                        }
                        (__VLS_45.slots).default;
                        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
                    }
                }
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["fortnite"];
        __VLS_styleScopedClasses["card"];
        __VLS_styleScopedClasses["munt"];
        __VLS_styleScopedClasses["buttons"];
        __VLS_styleScopedClasses["gui"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            userInv: userInv,
            price: price,
            unbox: unbox,
            sell: sell,
            closeGui: closeGui,
            openGui: openGui,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
