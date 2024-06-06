<template>
    <div class="fortnite">
      <div v-for="skib in userInv" :key="skib.id">
        <div class="card">
          <h1>{{ skib.item }}</h1>
          <h2>{{ skib.itemrarity }}</h2>
          <div class="buttons">
            <button @click="unbox(skib)">Unbox</button>
            <button @click="openGui(skib)">Sell</button>
          </div>
          <div v-if="skib.showGui">
            <h2>Item: {{ skib.item }}</h2>
            <p>Type: {{ skib.itemType }}</p>
            <p>Rarity: {{ skib.itemrarity }}</p>

            <input placeholder="price (NUMBERS REQUIRED)" v-model="price"/>
            <button @click="sell(skib)">Sell to Market</button>
            <button @click="closeGui(skib)">Close GUI</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
import { supabase } from "@/lib/supabaseClient.js"
import { boxesList } from "@/stores/boxes";
import { onMounted, ref } from 'vue'

interface InventoryItem {
  id: number;
  item: string;
  possibleLoot: string[];
  itemType: string;
  itemrarity: string;
  rarity: string;
  showGui?: boolean;  
}

let userInv = ref<InventoryItem[]>([]);

interface Box {
  id: Number;
  item: String;
  rarity: 'common' | 'uncommon';
}

const videoPaths: Record<'common' | 'uncommon', String> = {
  common: './SkibUncommonAnimation.mkv',
  uncommon: './Skib1.mkv',
};

function playVideo(videoPath: String) {
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

let userID = ref(null);
let price = ref('');

async function callUserData() {
  const userData = await supabase.auth.getUser();
  const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
  userID.value = userData.data.user.id;
  userInv.value = oldSigmaData[0].inventory.map((item: InventoryItem) => ({
    ...item,
    showGui: false  
  }));
}
callUserData();

async function unbox(item: InventoryItem) {
  const box = boxesList.value.find(b => b.item === item.item);
  console.log(box);
  if (box) {
  }
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
  } else {
    console.log(item);
  }
}

async function sell(item: InventoryItem) {
  const updatedInventory = userInv.value.filter(invItem => invItem !== item);
  const userData = await supabase.auth.getUser();
  await supabase
    .from('userdata')
    .update({ inventory: updatedInventory })
    .eq('uuid', userID.value);

  const { error } = await supabase
    .from('usermarket')
    .insert({ item: item.item, itemType: item.itemType, sellPrice: price.value, soldBy: userData.data.user.email });

  userInv.value = updatedInventory;
  item.showGui = false;
}

function closeGui(item: InventoryItem) {
  item.showGui = false;
}

function openGui(item: InventoryItem) {
  item.showGui = true;
}
</script>

  
  <style scoped>
  .fortnite {
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
    margin: 10px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
  }
  </style>
  