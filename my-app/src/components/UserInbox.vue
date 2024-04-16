<template>
    <div v-if="GUI" class="sploingus">
        <button @click="openGui"></button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const friendRequests = []
const GUI = ref(false)
function openGui(){
    GUI.value != GUI.value
}
</script>

<style lang="scss" scoped>
.sploingus{
    transition: .3s all;
    width: 5%;
    height: 100%;
}
</style> 