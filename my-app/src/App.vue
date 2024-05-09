<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import UserInbox from '@/components/UserInbox.vue'
import { supabase } from '@/lib/supabaseClient.js'
import { ref, onMounted } from 'vue'




let sigma = ref(false)
let rizzler
async function unc(){
  rizzler = await supabase.auth.getUser()
    console.log(rizzler)
    if(rizzler.error === null){
        sigma.value = true
    }
    location.reload();
}

onMounted(()=>{
    unc()
})


</script>

<template>
  <div class="alert" v-if="sigma">
      <h2>Hello, {{ rizzler.data.user.user_metadata.alias }}</h2>
  </div>
  <div v-if="!sigma">
    <button class="button-38"><RouterLink to="/">Home</RouterLink></button>

    <button class="button-38"><RouterLink to="/signin">Sign In</RouterLink></button>
  </div>
  <div class="wrapper" v-if="sigma">
    <button class="button-38"><RouterLink to="/">Home</RouterLink></button>
    
    <button class="button-38"><RouterLink to="/market">Market</RouterLink></button>

    <button class="button-38"><RouterLink to="/profile">Profile</RouterLink></button>

    <button class="button-38"><RouterLink to="/signin">Sign In</RouterLink></button>

    <button class="button-38"><RouterLink to="/trade">Trade</RouterLink></button>

    <button class="button-38"><UserInbox/></button>
  </div>
  
  <RouterView />
</template>

<style scoped>


.wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  align-items: center;

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
