<template>
        <button @click="acceptFriendRequest(userId, '2352fc04-0274-4d7d-8924-55b577f3c81d')">fanum toilet</button>
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
    let callreq = await supabase
        .from('userdata')
        .select('friends')
        .eq('uuid', userId.value)
    let userFriends = callreq.data[0].friends
    userFriends.push('skibidi')
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
        .eq('requestId', '6d1ca571-d390-4164-a5f0-f1f7d8b78c34')

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
    let callreq = await supabase
        .from('userdata')
        .select('friends')
        .eq('uuid', receiverId)
    console.log(callreq.data[0])
    let userFriends = callreq.data[0].friends
    let senderUsername = await supabase
        .from('userdata')
        .select('username')
        .eq('uuid', senderId)
    userFriends.push(senderId)
    await supabase
        .from('userdata')
        .update([{ friends: userFriends }])
        .eq('uuid', receiverId )
}


</script>

<style scoped>

</style>