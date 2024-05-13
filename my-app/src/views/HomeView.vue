<script setup lang="ts">
import AuthUser from "../components/AuthUser.vue"
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'



async function sendFriendRequest(receiverId: String) {
  const userData = await supabase.auth.getUser();
    const userId = userData.data.user.id
    console.log(userId)
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
    <button @click="sendFriendRequest('2352fc04-0274-4d7d-8924-55b577f3c81d')">click to ePIC RIZZ</button>
  </main>
</template>

<style scoped>

</style>
