<template>
    <div class="fortnite">
      <div v-for="skib in userInv" :key="skib.id">
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
//   import ModelBox from "@/components/ModelBox.vue";
  
  interface InventoryItem {
    id: number;
    item: string;
    possibleLoot: string[];
    itemType: string;
  }
  
  let userInv = ref<InventoryItem[]>([]);
  
  const boxesList = ref<Box[]>([
    { id: 1, item: 'Common Crate', rarity: 'common' },
    { id: 2, item: 'Uncommon Crate', rarity: 'uncommon' },
  ]);
  
  interface Box {
    id: number;
    item: string;
    rarity: 'common' | 'uncommon'; 
  }
  
  const videoPaths: Record<'common' | 'uncommon', string> = {
    common: './SkibUncommonAnimation.mkv',
    uncommon: './Skib1.mkv',
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
  
  let showGui = ref(false);
  let userID = ref(null);
  let price = ref('');
  
  async function callUserData() {
    const userData = await supabase.auth.getUser();
    const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
    userID.value = userData.data.user.id;
    userInv.value = oldSigmaData[0].inventory;
  }
  callUserData();
  
  async function unbox(item: InventoryItem) {
    const box = boxesList.value.find(b => b.item === item.item);
    if (box) {
    }
    playVideo(videoPaths[box.rarity]);
    if (item.itemType === 'crate') {
      const randomIndex = Math.floor(Math.random() * item.possibleLoot.length);
      const newItem = item.possibleLoot[randomIndex];
      const updatedInventory = userInv.value.filter(invItem => invItem !== item);
      userInv.value = updatedInventory;
      userInv.value.push({
        id: new Date().getTime(),
        item: newItem,
        possibleLoot: [],
        itemType: 'item'
      });
      
       


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
    showGui.value = false;
  }
  
  function closeGui() {
    showGui.value = false;
  }
  
  function openGui() {
    showGui.value = true;
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
  