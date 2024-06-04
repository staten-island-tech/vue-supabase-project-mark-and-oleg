<template>
  <div class="skibidi">
    <div class="card" v-for="box in boxesList" :key="box.id">
      <h2>{{ box.item }}</h2>
      <div class="model-container">
        <ModelBox v-if="box.rarity === 'common'" :box="box" :rarity="box.rarity" class="common-model" />
        <ModelBox v-if="box.rarity === 'uncommon'" :box="box" :rarity="box.rarity" class="uncommon-model" />
        <ModelBox v-if="box.rarity === 'rare'" :box="box" :rarity="box.rarity" class="rare-model" />
        <ModelBox v-if="box.rarity === 'epic'" :box="box" :rarity="box.rarity" class="rare-model" />
        <ModelBox v-if="box.rarity === 'legendary'" :box="box" :rarity="box.rarity" class="rare-model" />
        <ModelBox v-if="box.rarity === 'exotic'" :box="box" :rarity="box.rarity" class="rare-model" />
      </div>
      <button @click="buyBox(box)">Buy Box</button>
    </div>
  </div>
  <h1>USER MARKETPLACE</h1>
  <div class="usermarket" v-for="item in countries" :key="item.id">{{ item }}</div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { boxesList } from '@/stores/boxes.ts'
import ModelBox from "@/components/ModelBox.vue"



const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from('usermarket').select();
  countries.value = data;
}

onMounted(() => {
  getCountries();
});

async function buyBox(box) {
  const userData = await supabase.auth.getUser();
  const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
  let inventory = oldSigmaData.data[0].inventory;
  inventory.push(box);
  await supabase.from('userdata').update({ inventory }).eq('uuid', userData.data.user.id);
}
</script>

<style scoped>
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

.rare-model {
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
}


</style>
