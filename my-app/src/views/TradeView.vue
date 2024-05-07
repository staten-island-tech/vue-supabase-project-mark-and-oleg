<template>
    <div>
        <h1>TRADE REQUESTS</h1>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import FriendRequests from "../components/FriendRequests.vue"
async function unc(){
    const { data } = await supabase.auth.getUser()
    console.log(data.user.id)
}

unc()


</script>




<style scoped>

</style>