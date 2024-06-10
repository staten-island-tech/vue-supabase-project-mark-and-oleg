<template>
  <div class="fortnite">
    <div v-for="skib in userInv" :key="skib.id" class="card">
      <h1>{{ skib.item }}</h1>
      <h2>{{ skib.itemrarity }}</h2>
      <img :src="skib.imageLink" class="munt"/>
      <div class="buttons">
        <button v-if="skib.itemType === 'crate'" @click="unbox(skib)">Unbox</button>
        <button @click="openGui(skib)">Sell</button>
      </div>
      <div v-if="skib.showGui" class="gui">
        <h2>Item: {{ skib.item }}</h2>
        <p>Type: {{ skib.itemType }}</p>
        <p>Rarity: {{ skib.itemrarity }}</p>
        <input placeholder="price (NUMBERS REQUIRED)" v-model="price" />
        <button @click="sell(skib)">Sell to Market</button>
        <button @click="closeGui(skib)">Close GUI</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from "@/lib/supabaseClient.js";
import { boxesList } from "@/stores/boxes";
import { onMounted, ref } from 'vue';

interface InventoryItem {
  id: number;
  item: string;
  possibleLoot: InventoryItem[];
  itemType: string;
  itemrarity: string;
  rarity: string;
  imageLink: string;
  showGui?: boolean;
}

let userInv = ref<InventoryItem[]>([]);
let userID = ref<string | null>(null);
let price = ref('');

const videoPaths: Record<string, string> = {
  common: './SkibUncommonAnimation.mkv',
  uncommon: './Skib1.mkv',
  rare: './SkibRareAnimation.mkv',
  epic: './SkibEpicAnimation.mkv',
  legendary: './SkibLegAnimation.mkv',
  exotic: './SkibExoticAnimation.mkv',
};

function playVideo(videoPath: string) {
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
    console.error("Error fetching user data:", (error as Error).message);
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
  userInv.value = oldSigmaData[0].inventory.map((item: InventoryItem) => ({
    ...item,
    showGui: false,
  }));
}

callUserData();

async function unbox(item: InventoryItem) {
  try {
    const box = boxesList.value.find(b => b.item === item.item);
    if (box) playVideo(videoPaths[box.rarity]);

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
  } catch (error) {
    console.error('Error unboxing item:', (error as Error).message);
  }
}

async function sell(item: InventoryItem) {
  const updatedInventory = userInv.value.filter(invItem => invItem !== item);
  const { data: userData, error } = await supabase.auth.getUser();
  if (error || !userData?.user) {
    console.error("Error fetching user data:", (error as Error).message);
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

function closeGui(item: InventoryItem) {
  item.showGui = false;
}

function openGui(item: InventoryItem) {
  item.showGui = true;
}
</script>

<style scoped>
body {
  background-color: #111;
  font-family: 'Courier New', Courier, monospace;
}

.fortnite {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-image: url('/path/to/your/grunge-texture.jpg');
  background-size: cover;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #444;
  background-color: #222;
  width: 250px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  color: #eee;
}

.card h1, .card h2, .card p {
  margin: 0;
}

.card .buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}

.card button {
  background-color: #444;
  color: #eee;
  border: 1px solid #666;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  margin: 5px;
}

.card button:hover {
  background-color: #555;
}

.card .gui {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.card .gui input {
  background-color: #333;
  color: #eee;
  border: 1px solid #555;
  padding: 5px;
  width: 100%;
  margin-top: 10px;
}

.card .gui button {
  margin-top: 10px;
}
</style>
