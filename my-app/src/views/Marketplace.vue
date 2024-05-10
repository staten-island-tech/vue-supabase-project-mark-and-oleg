<template>
  <div>
    <div class="card" v-for="box in boxesList" :key="box.id">
      <h2>{{ box.item }}</h2>
      <ModelBox :box="box" />
      <div class="model-container">
        
      </div>
      <button @click="buyBox(box)">Buy Box</button>
    </div>
    <h1>USER MARKETPLACE</h1>
    <div class="usermarket" v-for="item in countries" :key="item.id">{{ item }}</div>
  </div>
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
  width: 40%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.model-container {
  width: 100%;
  height: 200px; /* Adjust as needed */
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
</style>
