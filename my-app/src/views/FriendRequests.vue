<template>
    <div>

    </div>
</template>

<script setup>

/* const postFriendRequest = (target) => {
    const u1 = currentUser;
    const u2 = target;
    fetch('http://localhost:5173/friend_requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        body: JSON.stringify({
            request_id: u1.id,
            receiver_id: u2,
            status: "pending"
        })
    })
}

if ((request.requestor.id == u1.id || request.receiver.id == u1.id) && request.status == 'accepted'){//ADD//}



const handleAcceptBtn = (target) => {
    fetch(`http://localhost:5173/friend_requests/${target}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify ({
            id: target,
            status: "accepted"
        })
    }).then(getFriends())
} */

</script>
<style scoped>

</style>