<template>
    <div class="fortnite">
        <div v-for="skib in userInv">
            <div class="card">
                <h1>{{ skib.item }}</h1>
                <div class="buttons">
                    <button @click="unbox(skib)">Unbox</button>
                    <button @click="openGui">Sell</button>
                </div>
                <div v-if="showGui">
                    <h2>{{ skib }}</h2>
                    <button @click="sell(skib)">Sell to Market</button>
                    <input placeholder="skibidi" v-model="price"/>
                    <button @click="closeGui">Close GUI</button>
                </div>
            </div>
        </div>
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

 showGui = ref(false);
let userID = ref(null)
let inventory = ref('')
let price = ref()
async function callUserData() {
    const userData = await supabase.auth.getUser();
    const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
    userID = userData.data.user.id
    userInv.value = oldSigmaData.data[0].inventory;
}
callUserData();
async function unbox(item: InventoryItem) {
    if (item.itemType === 'crate') {
        const randomIndex = Math.floor(Math.random() * item.possibleLoot.length);
        const newItem = item.possibleLoot[randomIndex];

        const updatedInventory = userInv.value.filter(invItem => invItem !== item);
        userInv.value = updatedInventory;
        userInv.value.push(newItem)
        await supabase
          .from('userdata')
          .update({ inventory: updatedInventory })
          .eq('uuid', userID);
    }else{
        console.log(item)
    }
}

async function sell(item: InventoryItem) {
    const updatedInventory = userInv.value.filter(invItem => invItem !== item);
    const specificItem = userInv.value.filter(invItem => invItem == item)
    const userData = await supabase.auth.getUser()
    console.log(userData.data.user.id)
    console.log(updatedInventory, specificItem)
    await supabase
      .from('userdata')
      .update({ inventory: updatedInventory })
      .eq('uuid', userID);

    const { error } = await supabase
      .from('usermarket')
      .insert({ item: item.item, itemType: item.itemType, sellPrice: price.value, soldBy: userData.data.user.email})

    userInv.value = updatedInventory;

    showGui.value = false;
}
function closeGui() {
    showGui.value = false;
}
function openGui() {
    showGui.value = true
}

</script>

<style scoped>
.fortnite{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.card {
    display: flex;
    flex-direction: column;
    border: 4px solid black;
    width: 250px;
    align-items: center;
    margin: 10px
}

.buttons {
    display: flex;
    flex-direction: row;
}
</style>
