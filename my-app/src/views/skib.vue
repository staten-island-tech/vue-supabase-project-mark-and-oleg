<template>
  <div class="fart" v-if="skib">
    <h1>{{ fard.alias }}</h1>
    Friends:
    <h2>{{ fard.friends }}</h2>
    Inventory:
    <h3>{{ fard.inventory }}</h3>
    <button @click="sendFriendRequest(fard.uuid, rizzler?.data?.user?.id)">send friend request</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';
import { useRoute } from 'vue-router';

interface User {
  id: string;
  email?: string;
}

interface UserData {
  alias?: string;
  friends?: string;
  inventory?: string;
  uuid?: string;
}

let rizzler = ref<{ data: { user: User } } | null>(null);
let skib = ref(false);
const fard = ref<UserData>({});

async function tio() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error getting user:', error.message);
    return;
  }
  rizzler.value = data ? { data: data } : null;
}   

tio();

const route = useRoute();

async function sendFriendRequest(receiverId: string | undefined, senderId: string | undefined) {
  if (!receiverId || !senderId) {
    console.error('Receiver ID or Sender ID is undefined.');
    return;
  }
  const { error } = await supabase
    .from('friendrequests')
    .insert([{ senderId: senderId, receiverId: receiverId }]);
  if (error) {
    console.error('Error sending friend request:', error.message);
  }
}

const getURL = async () => {
  let poopy = route.params.id;
  const { data, error } = await supabase
    .from('userdata')
    .select()
    .eq('alias', poopy);
  if (error) {
    console.error('Error fetching user data:', error.message);
    return;
  }
  if (data.length > 0) {
    fard.value = data[0];
    skib.value = true;
  } else {
    fard.value = { alias: 'no people found' };
  }
};

onMounted(async () => {
  await getURL();
});
</script>

<style scoped>
.fart {
  color: white;
}
</style>
