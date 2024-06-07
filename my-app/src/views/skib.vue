<template>
    <div class="fart" v-if="skib">
      <h1>{{ fard.alias }}</h1>
      Friends:
      <h2>{{ fard.friends }}</h2>
      Inventory:
      <h3>{{ fard.inventory }}</h3>
      <button @click="sendFriendRequest(fard.value.uuid, rizzler.data.user.id)">send friend request</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUpdated } from 'vue';
  import { supabase } from '@/lib/supabaseClient.js'
  import { useRoute } from 'vue-router';
  let rizzler
  let skib = ref(false)
  const fard = ref({});

  async function tio(){
    rizzler = await supabase.auth.getUser()
  }   
  tio()
  const route = useRoute();
  async function sendFriendRequest(receiverId, senderId) {
    let currentFriends = await supabase.from('userdata').select().eq('uuid', senderId);
    const { data, error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: senderId, receiverId: receiverId}]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}
  const getURL = async () => {
    let poopy = route.params.id;
    const { data } = await supabase
        .from('userdata')
        .select()
        .eq('alias', poopy)
    if(data.length > 0){
        fard.value = data[0]
        skib.value = true
    }else{
        fard.value = 'no people found'
    }
  };
  
  onMounted(async () => {
    await getURL();
    console.log(fard.value.uuid)
  });

  </script>
  <style scoped>
.fart{
  color: white;
}
</style>