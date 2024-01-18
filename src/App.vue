<script setup lang="ts">
import Counter from './components/Counter.vue';
// import { Header } from './components/Header';
import { MyComponent } from './components/MyComponent';
import { Header } from './components/Header';
</script>

<template>
  <Header />
  <div>
    <h1>hello my project</h1>
  </div>
  <Counter />
  <MyComponent :title="String(2 + 2)" />
</template>
