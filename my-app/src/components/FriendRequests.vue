<template>

<!--         <button @click="sendFriendRequest()">skib</button> -->
        <button @click="acceptFriendRequest(userId, '01d82b5b-2bad-4737-86af-927bed3490db')">fanum toilet</button>

</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'

const userId = ref()

async function rizztoilet(){
    const userData = await supabase.auth.getUser();
    userId.value = userData.data.user.id
}
onMounted(()=>{
    rizztoilet()
})
async function sendFriendRequest(receiverId) {
    let currentFriends = await supabase.from('userdata').select().eq('uuid', senderId);
    console.log(currentFriends.data[0].friends, senderId)
    const { data, error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: senderId, receiverId: receiverId}]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}


async function acceptFriendRequest(senderId, receiverId) {
    const { data, error } = await supabase
        .from('friendrequests')
        .delete()
        .eq('requestId', 'd7645c5c-c3e4-4583-a6d2-8f9c74ad3690')

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
    await supabase
        .from('userdata')
        .update([{ friends: senderId }])
        .eq('uuid', receiverId )
}


</script>

<style scoped>

</style>