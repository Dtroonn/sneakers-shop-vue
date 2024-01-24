<template>
  <button :class="classes.btn" @click="onOpenClick">
    <slot></slot>
  </button>
  <Drawer v-model:open="isOpen" title="Корзина" />
</template>

<script setup lang="ts">
import { Drawer } from 'ant-design-vue';
import { ref, defineModel } from 'vue';

const isOpen = defineModel<boolean>({ default: false });

const onOpenClick = () => {
  isOpen.value = true;
};
</script>

<style lang="postcss" module="classes">
.btn {
  cursor: pointer;
}
</style>
