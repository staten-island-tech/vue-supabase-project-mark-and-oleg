<template>
    <div v-for="skib in userInv">
        <h1>{{ skib.item }}</h1>
        <button @click="unbox(skib)">Unbox</button>
        <button @click="sell(skib)">Sell</button>
    </div>
    <div v-if="showGui">
        <h2>{{ inventory }}</h2>
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
let userID = ref(null)
let inventory = ref('')
async function callUserData() {
    const userData = await supabase.auth.getUser();
    const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
    userID = userData.data.user.id
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
async function sell(item: InventoryItem) {
    const updatedInventory = userInv.value.filter(invItem => invItem.id !== item.id);
    console.log(updatedInventory)
    await supabase
      .from('userdata')
      .update({ inventory: updatedInventory })
      .eq('uuid', userID);

    userInv.value = updatedInventory;

    showGui.value = true;
}
function closeGui() {
    showGui.value = false;
}

callUserData();
</script>

<style scoped>

</style>
