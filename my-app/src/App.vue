<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import UserInbox from '@/components/UserInbox.vue'
import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted } from 'vue'
import Searchbar from '@/components/Searchbar.vue'
import type { User } from '@supabase/supabase-js'

let sigma = ref(false)
let rizzler: User | null = null;

async function unc() {
  const userData = await supabase.auth.getUser();
  if (userData && userData.error === null) {
    sigma.value = true;
    rizzler = userData.data.user;
  }
}    

onMounted(() => {
  unc();
});
</script>


<template>
  
  <div class="alert" v-if="sigma && rizzler">
  <h2 class="sigma">Hello, {{ rizzler.user_metadata.alias }}</h2>
  </div>
  
  <div v-if="!sigma">
    
    <button class="button-38"><RouterLink to="/">Sign Up</RouterLink></button>

    <button class="button-38"><RouterLink to="/signin">Log In</RouterLink></button>
  </div>
  <div class="wrapper" v-if="sigma">
    <div class="window">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Transparent_Background_Dromedary_Camel.png" class="fard"/>
      <h2>skib road</h2>
    </div>
    <button class="button-38"><RouterLink to="/">Register</RouterLink></button>
    
    <button class="button-38"><RouterLink to="/market">Market</RouterLink></button>

    <Searchbar/>

    <button class="button-38"><RouterLink to="/profile">Profile</RouterLink></button>

    <button class="button-38"><RouterLink to="/signin">Sign In</RouterLink></button>
    
  </div>
  
  <button class="button-38"><UserInbox/></button>
  
  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.window{
  display: flex;
  align-items: center;
  color: white;
}
.fard{
  height: 150px;
  width: 150px;
}
.sigma{
  margin-top: 2.5%;
  color: white;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  align-items: center;
  text-align: center;
  margin: 0 auto; 
}


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}


nav a:first-of-type {
  border: 0;
}
  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }



</style>
