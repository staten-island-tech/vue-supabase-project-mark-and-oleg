<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const loading = ref(false)
const email = ref('')
const password = ref('')
const username = ref('')

async function handleLogin() {
  let audio = new Audio("skibidi2.mp3");
  audio.play();
  setTimeout(()=>{
    audio.pause()
  }, 2500)
  try {
    const userData = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          alias: username.value
        }
      },
    });

    if (userData && userData.data && userData.data.user) {
      await supabase
        .from('userdata')
        .insert({ uuid: userData.data.user.id, created_at: userData.data.user.created_at, inventory: [], username: email.value, password: password.value, friends: [], alias: username.value, money: 1000 })
      location.reload(); 
      console.log('User signed up successfully:', userData.data.user.id);
    } else {
      console.error('User data is null or invalid.');
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error('Sign-up error:', error.message);
    } else {
      console.error('Sign-up error:', error);
    }
  }
}
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="handleLogin">
      <h1 class="header">User Sign Up</h1>
      <p class="description">Join the exclusive marketplace</p>
      <div class="input-group">
        <input class="input-field" required type="email" placeholder="Your email" v-model="email" />
        <input class="input-field" required type="password" placeholder="Create password" v-model="password" />
        <input class="input-field" required type="text" placeholder="Username" v-model="username" />
      </div>
      <div class="button-group">
        <input
          type="submit"
          class="button"
          :value="loading ? 'Loading...' : 'Create Account'"
          :disabled="loading"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  background-color: #141414;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.form {
  background-color: #1c1c1c;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  font-size: 24px;
  margin-bottom: 20px;
  color: white ;
}

.description {
  font-size: 14px;
  margin-bottom: 20px;
  color: #888;
}

.input-group {
  width: 100%;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: white;
}

.input-field::placeholder {
  color: #777;
}

.button-group {
  width: 100%;
}

.button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #218838;
}

.button:disabled {
  background-color: #555;
  cursor: not-allowed;
}
</style>
