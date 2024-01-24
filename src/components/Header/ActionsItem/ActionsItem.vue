<template>
  <div :class="classes['actions-item']">
    <div :class="classes['actions-item__icon']">
      <component :is="Icon" v-bind="{ style: { fontSize: '20px' } }" />
    </div>
    <div
      :class="[classes['actions-item__title'], isBold ? classes['actions-item__title_bold'] : '']"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
defineProps<{
  Icon: typeof UserOutlined;
  title: string;
  isBold?: boolean;
}>();
</script>

<style lang="postcss" module="classes">
.actions-item {
  display: flex;
  align-items: center;
  gap: 0 6px;

  color: #5c5c5c;

  &__title {
    &_bold {
      font-weight: 600;
    }
  }
}
</style>
