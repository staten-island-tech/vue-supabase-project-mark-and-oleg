<template>
  <div class="skibidi">
    <div class="card" v-for="box in boxesList" :key="box.id">
      <h2>{{ box.item }}</h2>
      <div class="model-container">
        <ModelBox v-if="box.rarity === 'common'" :box="box" :rarity="box.rarity" class="common-model" />
        <ModelBox v-if="box.rarity === 'uncommon'" :box="box" :rarity="box.rarity" class="uncommon-model" />
      </div>
      <button @click="buyBox(box)">Buy Box</button>
    </div>
  </div>
  <div class="mart">
    <h1>USER MARKETPLACE</h1>
    <div class="usermarket" v-for="item in countries" :key="item.id">
      {{ item }}
      <button @click="" class="munt">throgg</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';
import { boxesList } from '@/stores/boxes.ts';
import ModelBox from "@/components/ModelBox.vue";

interface Box {
  id: number;
  item: string;
  rarity: 'common' | 'uncommon'; 
}


const boxesList = ref<Box[]>([
  { id: 1, item: 'Common Crate', rarity: 'common' },
  { id: 2, item: 'Uncommon Crate', rarity: 'uncommon' },
 
]);


const videoPaths: Record<'common' | 'uncommon', string> = {
  common: './SkibUncommonAnimation.mkv',
  uncommon: './Skib1.mkv',

};

async function buyBox(box: Box) {
  const userData = await supabase.auth.getUser();
  const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
  let inventory = oldSigmaData[0].inventory;
  inventory.push(box);
  await supabase.from('userdata').update({ inventory }).eq('uuid', userData.data.user.id);
  playVideo(videoPaths[box.rarity]);
}

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


</script>

<style scoped>
.mart {
  margin-bottom: 5%;
}

.munt {
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  height: 550px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: space-around;
  position: relative;
}

.model-container {
  width: 100%;
  height: 200px;
  position: relative;
  justify-content: center;
  align-items: center;
}

.common-model {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.uncommon-model {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  margin-top: 10px;
  cursor: pointer;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

.skibidi {
  display: flex;
  flex-wrap: wrap;
}

.fortnite {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.usermarket {
  display: flex;
  flex-direction: column;
  width: 15%;
}
</style>
