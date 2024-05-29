<template>
    <div>
        <form type="search" class="formfirst">
            <label for="search" class="label">Search for stuff</label>
            <input class="search" type="search" placeholder="Search for products..." required />
            <button type="submit" class="submitter">go</button>    
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
:root {
    --rad: .7rem;
    --dur: .3s;
    --color-dark: #2f2f2f;
    --color-light: #fff;
    --color-brand: #f8c3f7;
    --color-brand-slightly-less-lighter-than-normal-color-brand: #f886f6;
    --font-fam: 'Lato', sans-serif;
    --height: 3rem;
    --btn-width: 6rem;
    --bez: cubic-bezier(0, 0, 0.43, 1.49);
}
html{
  font-size: 10px;
  margin: 0;
  padding: 0;
}

.label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    width: 1px;
    overflow: hidden;
}

.search {
    background: var(--color-light);
    padding: 0 1.6rem;
    border-radius: var(--rad);
    appearance: none;
    transition: all var(--dur) var(--bez);
    z-index: 1;
    position: relative;
    border: 2px solid black;
}
.formfirst {
    margin-top: 7%;
    position: relative;
    width: 50rem;
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