<script setup lang="ts">
import AuthUser from "../components/AuthUser.vue"
const now = new Date()
const poop = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
console.log(poop)
</script>

<template>
  <main>
    <AuthUser />
  </main>
</template>

<style scoped>
body {
  background-color: black;
}


</style>
