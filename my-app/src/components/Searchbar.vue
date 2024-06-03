<template>
<form type="search" class="formfirst">
    <label for="search" class="label">Search for stuff</label>
    <input class="search" type="search" v-model="val" placeholder="Search for sigmas..." required />
    <button :to="searchPath" class="submitter">SKIBIDI</button>
</form>
</template>

<script setup>
import { ref, computed } from 'vue'
import UserInbox from '@/components/UserInbox.vue'
let val = ref()
const searchPath = computed(() =>{ 
  return `/others/${val}`
})
</script>

<style scoped>
template{
  font-size: 10px;
  margin: 0;
  padding: 0;
}
:root {
    --rad: .7rem;
    --dur: .3s;
    --color-dark: #2f2f2f;
    --color-light: #ff0000;
    --color-brand: #c505c2;
    --color-brand-slightly-less-lighter-than-normal-color-brand: #f886f6;
    --font-fam: 'Lato', sans-serif;
    --height: 3rem;
    --btn-width: 6rem;
    --bez: cubic-bezier(0, 0, 0.43, 1.49);
}

.label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    width: 1px;
    overflow: hidden;
}

.search {
    width: 100%;
    background: var(--color-light);
    padding: 0 1.6rem;
    border-radius: var(--rad);
    appearance: none;
    transition: all var(--dur) var(--bez);
    position: relative;
    border: 2px solid black;
}
.formfirst {
    position: relative;
    width: 25rem;
    margin-left: 4%;
    background: var(--color-brand);
    border-radius: var(--rad);
  }
.search{
    height: var(--height);
    font-family: var(--font-fam);
    color: var(--color-dark);
    font-size: 1.2rem;
}
.submitter{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: var(--btn-width);
    font-weight: bold;
    background-color: var(--color-brand-slightly-less-lighter-than-normal-color-brand);
    border-radius: 0 var(--rad) var(--rad) 0;
    height: var(--height);
    font-family: var(--font-fam);
    border: 0;
    color: var(--color-dark);
    font-size: 1.2rem;
}
input:not(:placeholder-shown) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - var(--btn-width));
    + button {
      display: block;
    }
  }
</style>