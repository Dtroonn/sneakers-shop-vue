<template>
  <div :class="classes.products" v-auto-animate>
    <div :class="classes.products__column" v-for="item in items" :key="item.id">
      <ProductCard
        :is-favourite="!!favouriteProductsMap[item.id]"
        :title="item.name"
        :img-url="item.imgUrl"
        :price="item.price"
        :is-added-to-card="!!cartProductsMap[item.id]"
        @click-favourite-btn="() => onChangeFavouriteProductsMap(item.id)"
        @click-cart-btn="() => onChangeCartProductsMap(item)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductCard } from '@/components/ProductCard';
import type { ProductsListProps } from './ProductsList.props';
import { inject, onUpdated } from 'vue';
import { CART_INJECTION_KEY, FAVOURITES_INJECTION_KEY } from '@/common/injectionKeys';
import type { ExtractGeneric } from '@/types/ExtractGeneric.type';

const { favouriteProductsMap, onChangeFavouriteProductsMap } = inject(
  FAVOURITES_INJECTION_KEY,
) as ExtractGeneric<typeof FAVOURITES_INJECTION_KEY>;
const { cartProductsMap, onChangeCartProductsMap } = inject(CART_INJECTION_KEY) as ExtractGeneric<
  typeof CART_INJECTION_KEY
>;

defineProps<ProductsListProps>();

onUpdated(() => {
  console.log('UPDATED');
});
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
