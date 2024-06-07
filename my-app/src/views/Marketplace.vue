<template>
  <div class="skibidi">
    <div class="card" v-for="box in boxesList" :key="box.id">
      <h2>{{ box.item }}</h2>
      <div class="model-container">
        <ModelBox v-if="box.rarity === 'common'" :box="box" :rarity="box.rarity" class="common-model" />
        <ModelBox v-if="box.rarity === 'uncommon'" :box="box" :rarity="box.rarity" class="uncommon-model" />
        <ModelBox v-if="box.rarity === 'rare'" :box="box" :rarity="box.rarity" class="rare-model" />
        <ModelBox v-if="box.rarity === 'epic'" :box="box" :rarity="box.rarity" class="epic-model" />
        <ModelBox v-if="box.rarity === 'legendary'" :box="box" :rarity="box.rarity" class="leg-model" />
        <ModelBox v-if="box.rarity === 'exotic'" :box="box" :rarity="box.rarity" class="exotic-model" />
      </div>
      <button @click="buyBox(box)">Buy Box</button>
    </div>
  </div>
  <div class="mart">
    <h1>USER MARKETPLACE</h1>
    <h2>Total current value of market: {{ totalmarketvalue }}</h2>
    <div class="gyatt">
      <div class="usermarket" v-for="item in usermarket" :key="item.id">
        {{ item }}
      <button @click="buyOffMarket(item)" class="munt">Clear</button>
    </div>
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
  rarity: 'common' | 'uncommon' | 'epic'; 
}

let totalmarketvalue = ref(0)
let usermarket = ref()

async function rizz() {
  totalmarketvalue.value = 0
  const { data } = await supabase.from('usermarket').select();
  data.forEach((val)=>{
    totalmarketvalue.value = totalmarketvalue.value + val.sellPrice
  }) 
  usermarket.value = data;
}

async function buyOffMarket(fard: Object){
  let productId = fard.uuid
  await supabase
    .from('usermarket')
    .delete()
    .eq('uuid', productId)
  const userData = await supabase.auth.getUser();
  const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
  let inventory = oldSigmaData[0].inventory;
  inventory.push(fard)
  await supabase
    .from('userdata')
    .update({ inventory })
    .eq('uuid', userData.data.user.id)
  rizz()
}
onMounted(() => {
  rizz();
});

async function buyBox(box: Box) {
  const userData = await supabase.auth.getUser();
  const { data: oldSigmaData } = await supabase.from('userdata').select().eq('uuid', userData.data.user.id);
  let inventory = oldSigmaData[0].inventory;
  inventory.push(box);
  await supabase.from('userdata').update({ inventory }).eq('uuid', userData.data.user.id);
}

</script>

<style scoped>
.mart {
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.gyatt{
  display: flex;
  flex-wrap: wrap;
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
  background-color: #636363;
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

.common-model, .uncommon-model, .rare-model, .epic-model, .leg-model, .exotic-model {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  margin-top: 10px;
  cursor: pointer;
  padding: 8px 16px;
  background-color: green;
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

.body {
  background-color: black;
}

h1, h2, p, div, button {
  color: white;
}
</style>
