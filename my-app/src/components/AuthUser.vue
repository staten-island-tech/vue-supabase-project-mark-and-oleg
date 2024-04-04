<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const loading = ref(false)
const email = ref('')
const password = ref('')
const username = ref('')
function fart() {
  console.log(email.value)
}
async function handleLogin() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value
      }
    },
  })
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" required type="username" placeholder="Username" v-model="username" />
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