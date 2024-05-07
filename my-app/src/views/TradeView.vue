<template>
    <div>
        <h1>TRADE REQUESTS</h1>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import FriendRequests from "../components/FriendRequests.vue"
import {ref} from 'vue'

const sigma = ref(null)

async function unc(){
    const { data } = await supabase.auth.getUser()
    if(data){
        sigma.value = true
    } else {
        sigma.value = false
    }
    console.log(data.user.id)

}

unc()


</script>




<style scoped>

</style>