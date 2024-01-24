<template>
  <div class="_container">
    <div :class="classes.header">
      <Typography.Title>Все кроссовки</Typography.Title>
    </div>
    <ProductsList :items="products" />
  </div>
</template>

<script setup lang="ts">
import { Typography } from 'ant-design-vue';
import { watchEffect, ref } from 'vue';
import axios from 'axios';
import { API } from '@/common/api';
import type { IProduct } from '@/types/Product.interface';
import { ProductsList } from '@/components/ProductsList';

const products = ref<IProduct[]>([]);

watchEffect(async () => {
  const { data } = await axios.get(API.items.index);
  products.value = data;
});
</script>

<style module="classes">
.header {
  display: flex;
  margin: 0 0 40px 0;
}
</style>
@/types/Product.interface
