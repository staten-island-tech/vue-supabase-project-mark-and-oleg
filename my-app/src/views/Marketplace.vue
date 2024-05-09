<script setup lang="ts">


import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { boxesList } from '@/stores/boxes.ts'
import ModelBox from "@/components/ModelBox.vue"







function felch(x){
  setTimeout(()=> fanum(x), 2500)
}

async function fanum(x) {
  const userData = await supabase.auth.getUser()
  console.log(userData)
  const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id)
  let fartArr = oldSigmaData.data[0].inventory
  fartArr.push(x)
  console.log(fartArr)
  
  await supabase
    .from('userdata')
    .update({ inventory: fartArr})
    .eq('uuid', userData.data.user.id)
}

const countries = ref([])
  async function getCountries() {
    const { data } = await supabase.from('usermarket').select()
    countries.value = data
    console.log(countries.value)
  }
onMounted(()=>{
  getCountries()
})
</script>

<template>
  <div class="boxes" v-for="boxes in boxesList">
    <h2>{{ boxes.item }}</h2>
    <ModelBox/> 
    <button @click="felch(boxes)">buy box</button>
  </div>
  <h1>USER MARKETPLACE</h1>
  <div class="usermarket" v-for="item in countries">{{ item }}</div>
  
</template>

<style scoped>
.positionForm{
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
}

.boxes {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 2% 2% 2% 2%;

}
</style>
