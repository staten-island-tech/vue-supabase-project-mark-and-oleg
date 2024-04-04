<template>
  <div>

  </div>
</template>

<script setup lang="ts">
const groups = [
    { items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'], probability: 0.8 },
    { items: ['Item 6', 'Item 7', 'Item 8'], probability: 0.2 }
]
function pickItemWithProbability() {
    const randomNumber = Math.random();

    let cumulativeProbability = 0;
    for (const group of groups) {
        cumulativeProbability += group.probability;
        if (randomNumber <= cumulativeProbability) {
            const randomIndex = Math.floor(Math.random() * group.items.length);
            return group.items[randomIndex];
        }
    }
    return null;
}

let arr = []
for(let i = 1; i <= 100; i++){
  const selectedItem = pickItemWithProbability();
  arr.push(selectedItem)
}
arr = arr.sort()
console.log(arr)
</script>

<style scoped>

</style>