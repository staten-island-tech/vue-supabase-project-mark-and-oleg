<script setup lang="ts">

import { supabase } from '@/lib/supabaseClient.js'
import { ref } from 'vue'
import { boxesList } from '@/stores/boxes.ts'
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

</script>

<template>
  <div class="boxes" v-for="boxes in boxesList">
    <h2>{{ boxes.item }}</h2>
    <button @click="fanum(boxes)">buy box</button>
  </div>
  <h1>USER MARKETPLACE</h1>
  
</template>

<style scoped>
.positionForm{
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
}
</style>
