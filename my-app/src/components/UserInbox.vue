<template>
    <button @click="openGui">rizz</button>

    <div v-if="GUI" v-for="request in friendReqs" class="sploingus">
        {{ request }}
        <FriendRequests/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import FriendRequests from '@/components/FriendRequests.vue'
const friendReqs = ref()
async function callFriendRequests(){
    const userData = await supabase.auth.getUser()
    
    const { data } = await supabase
        .from('friendrequests')
        .select('senderId')
        .eq('receiverId', userData.data.user.id)
    const fanumrizz = await supabase
        .from('userdata')
        .select('username')
        .eq('uuid', data[0].senderId)
    friendReqs.value = fanumrizz.data[0].username
}
onMounted(() => {
    callFriendRequests()
})
const GUI = ref(false)
function openGui(){

        callFriendRequests()

    GUI.value =! GUI.value
    console.log(GUI.value)
}
</script>

<style scoped>
.sploingus{
    transition: .3s all;
    padding: 20px 20px 20px 20px;
    width: 5%;
    height: 100%;
}
</style> 