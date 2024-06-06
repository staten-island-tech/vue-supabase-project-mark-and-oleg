<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'


const loading = ref(false)
const email = ref('')
const password = ref('')
const username = ref('')




async function handleLogin() {

<<<<<<< Updated upstream
  let audio = new Audio("skibidi2.mp3");
  audio.play();
  setTimeout(()=>{
    audio.pause()
  }, 2500)
=======
>>>>>>> Stashed changes
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

     await supabase
      .from('userdata')
      .insert({ uuid: userData.data.user.id, created_at: userData.data.user.created_at, inventory: [], username: email.value, password: password.value, friends: [], alias: username.value, money: 1000 })
    location.reload(); 
    console.log('User signed up successfully:', userData.data.user.id);

  } catch (error) {
    console.error('Sign-up error:', error.message);
  }
}

</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>

        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
        <input class="inputField" required type="password" placeholder="Create password" v-model="password" />
        <input required type="username" placeholder="Username" v-model="username">
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Create User'"
          :disabled="loading"
          
        />
      </div>
    </div>
  </form>
</template>