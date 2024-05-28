<template>
        <button @click="acceptFriendRequest(userId, '111a0e72-b446-45b3-923a-1bac38550508')">fanum toilet</button>
        <button @click="fart">skib</button>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'

const userId = ref()

async function rizztoilet(){
    const userData = await supabase.auth.getUser();
    userId.value = userData.data.user.id
}
async function fart(){
    let userFriends = await supabase
        .from('userdata')
        .select('friends')
        .eq('uuid', userId.value)
    console.log(userFriends)
}
onMounted(()=>{
    rizztoilet()
})
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


async function acceptFriendRequest(senderId, receiverId) {
    let requestId = await supabase.from('friendrequests').select().eq('senderId', senderId).eq('receiverId', receiverId)
    const { data, error } = await supabase
        .from('friendrequests')
        .delete()
        .eq('requestId', '875e8506-4e59-49ef-8047-b2fce4ead998')

    if (error) {
        console.error('Error accepting friend request:', error.message);
    }

    await addFriend(senderId, receiverId);
    await addFriend(receiverId, senderId); 

} 


async function rejectFriendRequest(requestId) {
    const { data, error } = await supabase
        .from('friend_requests')
        .update({ status: 'rejected' })
        .eq('id', requestId);
    if (error) {
        console.error('Error rejecting friend request:', error.message);
    }
}

async function addFriend(receiverId, senderId) {
    let userFriends = await supabase
        .from('userdata')
        .select('friends')
        .eq('uuid', receiverId)
    console.log(userFriends)
    await supabase
        .from('userdata')
        .update([{ friends: senderId }])
        .eq('uuid', receiverId )
}


</script>

<style scoped>

</style>