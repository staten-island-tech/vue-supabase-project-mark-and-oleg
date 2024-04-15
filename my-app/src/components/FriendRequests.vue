<template>
    <div>
        <form>

        </form>
        <button @click="sendFriendRequest()">skib</button>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'

async function sendFriendRequest() {
    const userData = await supabase.auth.getUser();
    let senderId = userData.data.user.id
    let currentFriends = await supabase.from('userdata').select().eq('uuid', senderId);
    console.log(currentFriends.data[0].friends, senderId)
    const { data, error } = await supabase
        .from('friendrequests')
        .insert([{ senderId: senderId, receiverId: 'ac6d80ec-1443-4923-a104-3c75ff6e1924'}]);
    if (error) {
        console.error('Error sending friend request:', error.message);
    }
}


async function acceptFriendRequest(requestId) {
    const { data, error } = await supabase
        .from('friend_requests')
        .update({ status: 'accepted' })
        .eq('id', requestId);
    if (error) {
        console.error('Error accepting friend request:', error.message);
    }

    const request = data[0];
    if (request) {
        const { sender_id, receiver_id } = request;
        await addFriend(sender_id, receiver_id);
        await addFriend(receiver_id, sender_id);
    }
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