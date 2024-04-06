<template>
    <div v-for="skib in userInv">
        <h1>{{ skib.item }}</h1>
        <button @click="unbox(skib)">Unbox</button>
        <button @click="sell(skib)">Sell</button>
    </div>
    <div v-if="showGui">
        <h2>{{ skib }}</h2>
        <button @click="closeGui">Close GUI</button>
    </div>
</template>

<script setup lang="ts">
import { supabase } from "@/lib/supabaseClient.js"
import { onMounted, ref } from 'vue'

interface InventoryItem {
  id: number;
  item: string;
  possibleLoot: string[];
  itemType: string;
}

let userInv = ref<InventoryItem[]>([]);
let showGui = ref(false);

async function callUserData() {
    const userData = await supabase.auth.getUser();
    const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
    userInv.value = oldSigmaData.data[0].inventory;
}

async function unbox(item: InventoryItem) {
    if (item.itemType === 'crate') {
        const randomIndex = Math.floor(Math.random() * item.possibleLoot.length);
        console.log(item.possibleLoot[randomIndex]);
    }else{
        console.log(item)
    }
}
function sell(item: InventoryItem) {

    showGui.value = true;
}

function closeGui() {
    showGui.value = false;
}

callUserData();
</script>

<style scoped>

</style>
