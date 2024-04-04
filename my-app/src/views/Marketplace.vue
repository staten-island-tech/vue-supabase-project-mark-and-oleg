<script setup>
import {v4 as uuidv4} from 'uuid';
import { supabase } from '@/lib/supabaseClient.js'
import { ref } from 'vue'

let username = ref()
let password = ref()
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
async function signUp(email, password) {
    try {
        const { user, session, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            throw error;
        }

        console.log('Sign-up successful:', user);
    } catch (error) {
        console.error('Sign-up error:', error.message);
    }
}

</script>

<template>
  <div class="about">
    <form class="positionForm">
      <label id="hi" for="hi">Username</label>
      <input v-model="username" class="usernameInp" required/>
      <label id="hi" for="hello">Password</label>
      <input v-model="password" type="password" class="passInp" required/>
      <input id="hi" type="submit" value="submit" @click="getPosition">

    </form>
  </div>
</template>

<style scoped>
.positionForm{
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: center;
}

.usernameInp {
  font-size: 2rem;
}

.passInp {
  font-size: 2rem ;
}



</style>
