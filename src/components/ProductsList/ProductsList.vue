<template>
  <div :class="classes.products">
    <div :class="classes.products__column" v-for="item in items" :key="item.id">
      <ProductCard
        :is-favourite="Boolean(favouritesProducts[item.id])"
        :title="item.name"
        :img-url="item.imgUrl"
        :price="item.price"
        @click-favourite-btn="() => onChangeFavourites(item.id)"
        :is-added-to-card="false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductCard } from '@/components/ProductCard';
import type { ProductsListProps } from './ProductsList.props';
import { inject, watchEffect } from 'vue';
import { FAVOURITES_INJECTION_KEY } from '@/common/injectionKeys';
import type { ExtractGeneric } from '@/types/ExtractGeneric.type';

const { favouritesProducts, onChangeFavourites } = inject(
  FAVOURITES_INJECTION_KEY,
) as ExtractGeneric<typeof FAVOURITES_INJECTION_KEY>;

defineProps<ProductsListProps>();

watchEffect(() => {
  console.log('HELLO1');
});

console.log('hello');
</script>

<style lang="postcss" module="classes">
.products {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  &__column {
    flex: 0 0 25%;
    padding: 0 20px;
    margin: 0 0 40px 0;
  }
}
</style>
