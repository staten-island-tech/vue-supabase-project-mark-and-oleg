<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const userdata = ref([])

  async function getCountries() {
    const { data } = await supabase.from('userdata').select()
    userdata.value = data
  }

  onMounted(() => {
    getCountries()
  })
</script>
<template>
  <ul>
    <li v-for="country in userdata" :key="country.uuid">{{ country.username }}</li>
  </ul>
  
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/market">Market</RouterLink>
  <RouterView />
</template>

<style scoped>

</style>
