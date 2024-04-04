<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
const now = new Date()
const poop = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
console.log(poop)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
