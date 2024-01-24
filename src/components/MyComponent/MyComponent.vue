<script setup lang="ts">
import { defineProps, onBeforeUpdate, onUpdated } from 'vue';
import type { MyComponentProps } from './MyComponent.props';
import { DatePicker, Button } from 'ant-design-vue';

onBeforeUpdate(() => {
  console.log('MY COMPONENT UPDATED');
});

const props = defineProps<MyComponentProps>();

console.log(props);
</script>

<template>
  <div>
    <h2 class="lalka">my component</h2>
    <div>{{ title }}</div>
    <Button :type="'primary'" @click="() => console.log('hello')">lalka</Button>
  </div>
</template>

<style scoped>
.lalka {
  color: red;
}

/* @media (max-width: var(--md)) {
  .lalka {
    color: green;
  }
} */
</style>
