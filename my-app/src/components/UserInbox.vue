<template>
    <button @click="openGui">rizz</button>

    <div v-if="GUI" v-for="request in friendReqs" class="sploingus">
        <h1 v-if="!loaded"> loading...</h1>
        {{ request }}
        <FriendRequests :munt="request.senderId"/>
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
    if(data.length > 0){
        console.log('felch', )
        friendReqs.value = data
    }else{
        friendReqs.value = ['no friend requests (fucking loser)']
        console.log('felch')
    }

}
let sibidi = ref([])
async function getUsernameFriendRequests(){
    await callFriendRequests()
    sibidi.value = []
    console.log(friendReqs.value[0])
    for(let i=0; i < friendReqs.value.length; i++){

        const { data, error } = await supabase
            .from('userdata')
            .select('username')
            .eq('uuid', friendReqs.value[i].senderId)
        console.log(data, error)
        sibidi.value.push(data[0].username)
    }
    friendReqs.value = sibidi.value
    console.log(friendReqs.value, sibidi.value)
}

onMounted(() => {
    callFriendRequests()
})
const GUI = ref(false)
let loaded = ref(false)
async function openGui(){
    loaded.value = false
    GUI.value =! GUI.value
    await callFriendRequests()
    loaded.value = true
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