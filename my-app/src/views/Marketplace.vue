<script setup>
import {v4 as uuidv4} from 'uuid';
import { supabase } from '@/lib/supabaseClient.js'
import { ref } from 'vue'

let username = ref()
let password = ref()
//const user = await supabase.auth.getUser()
//console.log(user)
function getPosition(e){
  e.preventDefault();
  let myuuid = uuidv4();
  const now = new Date();
  const poop = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} EDT`
  supabase
    .from('userdata')
    .insert([{ uuid: myuuid, created_at: poop, inventory: ['hi'], username: username.value, password: password.value }])
    
    .then(response => {
        console.log('UUID inserted successfully:', response);
    })
    .catch(error => {
        console.error('Error inserting UUID:', error);
    });
}
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username.value,
    password: password.value,
    options: {
      data: {
        username: username.value
      }
    }
  })
}
</script>

<template>
  <div class="about">
    <form class="positionForm">
      <label id="hi" for="hi">username</label>
      <input v-model="username" required/>
      <label id="hi" for="hello">password</label>
      <input v-model="password" required/>
      <input id="hi" type="submit" value="submit" @click.prevent="signInWithEmail">
    </form>
  </div>
</template>

<style scoped>
.positionForm{
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
}
</style>
