<script setup lang="ts">
import AuthUser from "../components/AuthUser.vue"
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'



async function sendFriendRequest(receiverId: String) {
  const userData = await supabase.auth.getUser();
    const userId = userData.data.user.id
    let currentFriends = await supabase.from('userdata').select().eq('uuid', userId);
    const { data, error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: userId, receiverId: receiverId}]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}

</script>

<template>
  <main>
    <AuthUser />
    <button @click="sendFriendRequest('01d82b5b-2bad-4737-86af-927bed3490db')">click to ePIC RIZZ</button>
  </main>
</template>

<style scoped>

</style>
