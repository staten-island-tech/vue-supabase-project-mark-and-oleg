<template>
    <div>

        <button @click="sendFriendRequest()">skib</button>
        <button @click="acceptFriendRequest('ac6d80ec-1443-4923-a104-3c75ff6e1924', '01d82b5b-2bad-4737-86af-927bed3490db')">rizz</button>

    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'


async function sendFriendRequest() {
    const userData = await supabase.auth.getUser();
    const userId = userData.data.user.id
    let senderId = userId
    let currentFriends = await supabase.from('userdata').select().eq('uuid', senderId);
    console.log(currentFriends.data[0].friends, senderId)
    const { data, error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: senderId, receiverId: 'ac6d80ec-1443-4923-a104-3c75ff6e1924'}]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}


async function acceptFriendRequest(senderId, receiverId) {
    const { data, error } = await supabase
        .from('friendrequests')
        .delete()
        .eq('requestId', 'af053a91-6852-4f32-b9aa-628a512adf37')

    if (error) {
        console.error('Error accepting friend request:', error.message);
    }
/* 
        const { senderId, receiverId } = request;
        await addFrziend(sender_id, receiver_id);
        await addFriend(receiver_id, sender_id); */

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

async function addFriend(userId, friendId) {
    const { data, error } = await supabase
        .from('userdata')
        .insert([{ friends: friendId }]);
    if (error) {
        console.error('Error adding friend:', error.message);
    }
}


</script>

<style scoped>

</style>