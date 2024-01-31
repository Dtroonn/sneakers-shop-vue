<template>
  <div class="_container">
    <div :class="classes.header">
      <Typography.Title>Все кроссовки</Typography.Title>
      <div :class="classes['header__input-wrapper']">
        <InputSearch v-model:value="searchValue" placeholder="Название..." enter-button />
      </div>
    </div>
    <ProductsList :items="products" />
  </div>
</template>

<script setup lang="ts">
import { Typography, InputSearch } from 'ant-design-vue';
import { watchEffect, ref } from 'vue';
import axios from 'axios';
import { API } from '@/common/api';
import type { IProduct } from '@/types/Product.interface';
import { ProductsList } from '@/components/ProductsList';

const products = ref<IProduct[]>([]);
const searchValue = ref<string>('');

watchEffect(async () => {
  const { data } = await axios.get(API.items.index, {
    params: {
      name: searchValue.value ? `*${searchValue.value}*` : null,
    },
  });
  products.value = data;
});
</script>

<style module="classes">
.header {
  display: flex;
  align-items: center;
  margin: 0 0 40px 0;
  justify-content: space-between;

  &__input-wrapper {
    flex: 0 0 300px;
  }
}
</style>
@/types/Product.interface
