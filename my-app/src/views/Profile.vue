<template>
    <div class="fortnite">
      <div v-for="skib in userInv" :key="skib.id" class="card">
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
          <input placeholder="price (NUMBERS REQUIRED)" v-model="price" />
          <button @click="sell(skib)">Sell to Market</button>
          <button @click="closeGui(skib)">Close GUI</button>
        </div>
      </div>
      <div v-if="showUnboxGui" class="unbox-gui-overlay">
        <div class="unbox-gui">
          <h2>You received: {{ unboxedItem.item.item }}</h2>
          <button @click="closeUnboxGui">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { supabase } from "@/lib/supabaseClient.js"
  import { boxesList } from "@/stores/boxes";
  import { ref, onMounted } from 'vue'
  
  interface InventoryItem {
    id: number;
    item: string;
    possibleLoot: string[];
    itemType: string;
    itemrarity: string;
    rarity: string;
    showGui?: boolean;
  }
  
  const userInv = ref<InventoryItem[]>([]);
  const userID = ref<string | null>(null);
  const price = ref<string>('');
  const showUnboxGui = ref<boolean>(false);
  const unboxedItem = ref<InventoryItem | null>(null);
  
  const videoPaths: Record<'common' | 'uncommon' | 'epic', string> = {
    common: './SkibUncommonAnimation.mkv',
    uncommon: './Skib1.mkv',
    epic: './SkibEpicAnimation.mkv',
  };
  
  async function callUserData() {
    try {
      const userData = await supabase.auth.getUser();
      if (userData.error) throw userData.error;
      userID.value = userData.data.user.id;
  
      const { data, error } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id).single();
      if (error) throw error;
  
      userInv.value = data.inventory.map((item: InventoryItem) => ({
        ...item,
        showGui: false  
      }));
      console.log('User data loaded successfully:', userInv.value);
    } catch (error) {
      console.error('Error loading user data:', error.message);
    }
  }
  
  onMounted(callUserData);
  
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
  
        unboxedItem.value = { ...item, item: newItem };
        showUnboxGui.value = true;
  
        await supabase
          .from('userdata')
          .update({ inventory: userInv.value })
          .eq('uuid', userID.value);
      }
    } catch (error) {
      console.error('Error unboxing item:', error.message);
    }
  }
  
  async function sell(item: InventoryItem) {
    try {
      const updatedInventory = userInv.value.filter(invItem => invItem !== item);
      const userData = await supabase.auth.getUser();
      await supabase
        .from('userdata')
        .update({ inventory: updatedInventory })
        .eq('uuid', userID.value);
  
      await supabase
        .from('usermarket')
        .insert({ item: item.item, itemType: item.itemType, itemrarity: item.itemrarity, sellPrice: price.value, soldBy: userData.data.user.email });
  
      userInv.value = updatedInventory;
      item.showGui = false;
    } catch (error) {
      console.error('Error selling item:', error.message);
    }
  }
  
  function closeGui(item: InventoryItem) {
    item.showGui = false;
  }
  
  function openGui(item: InventoryItem) {
    item.showGui = true;
  }
  
  function closeUnboxGui() {
    showUnboxGui.value = false;
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
  .unbox-gui-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .unbox-gui {
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  