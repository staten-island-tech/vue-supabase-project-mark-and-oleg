<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
</script>
<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/market">Market</RouterLink>
  <RouterView />
</template>

<style scoped>

</style>
