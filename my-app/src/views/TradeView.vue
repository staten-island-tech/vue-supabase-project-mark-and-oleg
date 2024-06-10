<template>
  <div>
    <h1>SEND TRADE REQUESTS</h1>
    <h2>Friends: </h2>
    <div v-for="(friend, index) in friendsList" :key="index">
      <h2>{{ friend }}</h2>
      <button @click="openGUI(friend)">Open Trade Menu</button>
    </div>
  </div>
  
  <div v-if="showGui">
    <div class="gui-overlay">
      <div class="gui">
        <h2>Trade Menu</h2>
        <h3>Trading with: {{ selectedFriend }}</h3>
        <button @click="closeGUI">Close</button>
      </div>
    </div>
  </div>
  
  <div>
    <h1>INCOMING TRADE REQUESTS</h1>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient.js'
import { ref } from 'vue'

const friendsList = ref<string[]>([]);
const showGui = ref(false);
const selectedFriend = ref('');

async function loadFriends() {
  const userData = await supabase.auth.getUser();
  const userId = userData?.data?.user?.id;

  if (userId) {
    const { data, error } = await supabase
      .from('userdata')
      .select('friends')
      .eq('uuid', userId);

    if (error) {
      console.error('Error fetching friends:', error.message);
    } else {
      friendsList.value = data?.[0]?.friends || [];
    }
  }
}

function openGUI(friend: string) {
  selectedFriend.value = friend;
  showGui.value = true;
}

function closeGUI() {
  showGui.value = false;
}

loadFriends();
</script>

<style scoped>
.fortnite {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  width: 250px;
  align-items: center;
  margin: 10px;
}
.buttons {
  display: flex;
  flex-direction: row;
}
.gui-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.gui {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
