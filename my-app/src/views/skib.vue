<template>
    <div class="fart">
      <h1>{{ fard.alias }}</h1>
      Friends:
      <h2>{{ fard.friends }}</h2>
      Inventory:
      <h3>{{ fard.inventory }}</h3>
      <button @click="sendFriendRequest(fard.uuid, rizzler.user.data.id)">send friend request</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUpdated } from 'vue';
  import { supabase } from '@/lib/supabaseClient.js'
  import { useRoute } from 'vue-router';
  let rizzler

  const fard = ref({});

  async function tio(){
    rizzler = await supabase.auth.getUser()
  }   
  tio()
  const route = useRoute();
  async function sendFriendRequest(receiverId, senderId) {
    let currentFriends = await supabase.from('userdata').select().eq('uuid', senderId);
    console.log(userId)
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