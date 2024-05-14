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
    let sibidi = ref([])
    const { data } = await supabase
        .from('friendrequests')
        .select('senderId')
        .eq('receiverId', userData.data.user.id)
        console.log(data.length - 1)
    for(let i=0; i < data.length - 1, i++;){
        let value = await supabase
            .from('userdata')
            .select('username')
            .eq('uuid', data[i].senderId)
        console.log(value)
    }
    
    friendReqs.value = sibidi.value
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