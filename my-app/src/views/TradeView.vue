<template>
    <div>
        <h1>SEND TRADE REQUESTS</h1>
        <h2>Friends: {{ friendsList }}</h2>
    </div>
    <div>
        <h1>INCOMING TRADE REQUESTS</h1>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import FriendRequests from "../components/FriendRequests.vue"
import { ref } from 'vue'
let friendsList = ref()
async function loadFriends(){
    const userData = await supabase.auth.getUser();
    let userId = userData.data.user.id;
    const { data } = await supabase
        .from('userdata')
        .select('friends')
        .eq('uuid', userId)
    friendsList.value = data[0].friends
}
loadFriends()
</script>




<style scoped>

</style>