<script setup>
import { supabase } from '@/lib/supabaseClient.js'
import { ref } from 'vue'

let username = ref('')
let password = ref('')

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
    console.log("whatthesigma");
    location.reload();
  } else {
    alert(error.message)
  }
}

let list = []
async function getUserData() {
  const user = (await supabase.auth.getUser()).data.user.id;
  console.log(user)
}

async function signOutCurrentUser() {
  await supabase.auth.signOut();
  location.reload();
}
</script>

<template>
  <div class="container">
    <div class="form-container">
      <form class="positionForm">
        <label for="hi">Email</label>
        <input v-model="username" required />
        <label for="hello">Password</label>
        <input v-model="password" type="password" required />
        <input type="submit" value="Submit" @click.prevent="signInWithEmail">
        <input type="button" value="Sign Out" @click.prevent="signOutCurrentUser">
      </form>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #141414;
  color: white;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  width: 400px;
}

.positionForm {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"], input[type="password"] {
  margin-bottom: 16px;
  padding: 8px;
  border: none;
  border-radius: 5px;
}

input[type="submit"], input[type="button"] {
  margin-bottom: 8px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover, input[type="button"]:hover {
  background-color: #218838;
}

input[type="submit"]:last-child, input[type="button"]:last-child {
  margin-bottom: 0;
}
</style>
