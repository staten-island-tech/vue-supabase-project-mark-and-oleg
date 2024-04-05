<template>
  <div>
    <button class="fart" @click.prevent="fanum">fart</button>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient.js'
const groups = [
    { items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'], probability: 0.8 },
    { items: ['Item 6', 'Item 7', 'Item 8'], probability: 0.2 }
]

function pickItemWithProbability() {
    const randomNumber = Math.random();

    let cumulativeProbability = 0;
    for (const group of groups) {
        cumulativeProbability += group.probability;
        if (randomNumber <= cumulativeProbability) {
            const randomIndex = Math.floor(Math.random() * group.items.length);
            return group.items[randomIndex];
        }
    }
    return null;
}
async function fanum() {
  const userData = await supabase.auth.getUser()
  console.log(userData)
  const item = {skibidi: pickItemWithProbability()};
  const oldSigmaData = await supabase.from('userdata').select().eq('uuid', userData.data.user.id)
  let fartArr = oldSigmaData.data[0].inventory
  fartArr.push(item)
  console.log(fartArr)
  const csx = oldSigmaData.data[0].inventory


  await supabase
    .from('userdata')
    .update({ inventory: fartArr})
    .eq('uuid', userData.data.user.id)
  }


</script>

<style scoped>

</style>