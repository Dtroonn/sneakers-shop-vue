<template>
  <div :class="classes['money-info']">
    <div :class="classes['money-info__title']">{{ title }}</div>
    <div :class="classes['money-info__line']"></div>
    <div :class="classes['money-info__value']">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
}>();
</script>

<style lang="postcss" module="classes">
.money-info {
  display: flex;
  align-items: flex-end;
  margin: 0 0 20px 0;
  &__title {
    font-size: 16px;
  }

  &__line {
    border: 1px dashed #dfdfdf;
    flex: 1 1 auto;
    margin: 0 8px;
  }

  &__value {
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
