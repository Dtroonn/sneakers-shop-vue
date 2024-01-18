<script setup lang="ts">
import { ref, onBeforeMount, watchEffect } from 'vue';

onBeforeMount(() => {
  console.log('before mount');
});

const text = ref('first text');

watchEffect(async () => {
  console.log('hello from effect');
  const string = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log('hello timeout');
      resolve('after effect');
    }, 5000);
  });

  text.value = 'after effect';
}, {});

console.log('init options api');

let count = ref<number>(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1>Counter {{ text }}</h1>
    <button @click="increment">{{ count }}</button>
    <input @keyup.enter="increment" />
  </div>
</template>
