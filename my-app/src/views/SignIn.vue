<script setup>

import { supabase } from '@/lib/supabaseClient.js'
import { ref } from 'vue'
let username = ref()
let password = ref()

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
  console.log(error)
  if(error === null){
    console.log("whatthesigma")
  }else{
    alert(error)
  }
}

let list = []
async function getUserData() {
  const user = (await supabase.auth.getUser()).data.user.id;
  console.log(user)
}
async function signOutCurrentUser() {
  await supabase.auth.signOut();
  
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
      <input id="hi" type="submit" value="sign out" @click.prevent="signOutCurrentUser">
      <input id="hi" type="submit" value="get user skibidi data" @click.prevent="getUserData">
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
