<script setup lang="ts">
import AuthUser from "../components/AuthUser.vue"
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import Searchbar from '@/components/Searchbar.vue'

async function sendFriendRequest(receiverId: string) {
  const userData = await supabase.auth.getUser();
  if (userData && userData.data && userData.data.user) {
    const userId = userData.data.user.id;
    console.log(userId);
    let currentFriends = await supabase.from('userdata').select().eq('uuid', userId);
    const { data, error } = await supabase
      .from('friendrequests')
      .insert([{ senderId: userId, receiverId: receiverId }]);
    if (error) {
      console.error('Error sending friend request:', error.message);
    }
  } else {
    console.error('User data is null or invalid.');
  }
}
</script>

<template>
  <main>
    <AuthUser />
  </main>
</template>

<style scoped>
body {
  background-color: #141414;
  color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.content {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
