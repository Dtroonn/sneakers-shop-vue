<template>
  <div :class="classes.root">
    <div :class="classes['root__img-wrapper']">
      <img :src="imgUrl" :alt="title" :class="classes.root__img" />
    </div>
    <div :class="classes.root__body">
      <div :class="classes.root__title">{{ title }}</div>
      <div :class="classes.root__footer">
        <div :class="classes.root__price">{{ price }}</div>
        <Button @click="emit('clickRemoveBtn')">
          <template #icon>
            <CloseOutlined />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { CloseOutlined } from '@ant-design/icons-vue';
defineProps<{
  imgUrl: string;
  title: string;
  price: string;
}>();

const emit = defineEmits<{
  clickRemoveBtn: [];
}>();
</script>

<style lang="postcss" module="classes">
.root {
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  padding: 30px 20px;
  display: flex;

  &__img-wrapper {
    flex: 0 0 70px;
    margin: 0 16px 0 0;
  }

  &__img {
    max-width: 100%;
  }

  &__body {
  }

  &__title {
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-weight: 700;
    margin: 0 20px 0 0;
  }
}
</style>
