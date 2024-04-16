<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import TheWelcome from '@/components/TheWelcome.vue'

const loading = ref(false)
const email = ref('')
const password = ref('')
const username = ref('')

async function handleLogin() {
  const audio = new Audio("@/public/skibidi.mp3");

  audio.play();

  try {

    const userData = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username: username.value
        }
      },
    });

    await supabase
      .from('userdata')
      .insert({ uuid: userData.data.user.id, created_at: userData.data.user.created_at, inventory: [], username: email.value, password: password.value, friends: [] })
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