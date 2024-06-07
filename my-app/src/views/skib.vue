<template>
    <div class="fart">
      <h1>{{ fard.alias }}</h1>
      <h2>{{ fard.friends }}</h2>
      Inventory:
      <h3>{{ fard.inventory }}</h3>
      <button @click="">send friend request</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUpdated } from 'vue';
  import { supabase } from '@/lib/supabaseClient.js'
  import { useRoute } from 'vue-router';

  const fard = ref({});
  
  const route = useRoute();
  
  const getURL = async () => {
    let poopy = route.params.id;
    const { data } = await supabase
        .from('userdata')
        .select()
        .eq('alias', poopy)
    if(data.length > 0){
        fard.value = data[0]
    }else{
        fard.value = 'no people found'
    }
  };
  
  onMounted(async () => {
    await getURL();
  });

  </script>
  <style scoped>
.fart{
  color: white;
}
</style>