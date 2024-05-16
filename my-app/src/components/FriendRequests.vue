<template>
<!-- 
        <button @click="sendFriendRequest()">skib</button> -->
        <button @click="acceptFriendRequest(userId, 'b586d532-4c7d-4f4a-a9e2-079208d166f2')">fanum toilet</button>

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
        .eq('requestId', '360609c4-376f-453e-9516-d82310f8209b')

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