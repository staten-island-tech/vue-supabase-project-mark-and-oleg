<script setup>
import {v4 as uuidv4} from 'uuid';
import { supabase } from '@/lib/supabaseClient.js'
let myuuid = uuidv4();
const now = new Date();
const poop = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} EDT`

supabase
  .from('userdata')
  .insert([{ uuid: myuuid, created_at: poop, inventory: ['hi'] }])
  
  .then(response => {
       console.log('UUID inserted successfully:', response);
   })
   .catch(error => {
       console.error('Error inserting UUID:', error);
   });

</script>

<template>
  <div class="about">
    <h1>{{ myuuid }}</h1>
  </div>
</template>

<style>

</style>
