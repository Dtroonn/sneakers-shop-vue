<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#3CC755',
      },
    }"
  >
    <Header />
    <main>
      <HomePage />
    </main>
  </ConfigProvider>
  <!-- <div>
    <h1>hello my project</h1>
    <Button @click="count++">click click</Button>
  </div>
  <Counter />
  <MyComponent :title="String(2 + 2)" /> -->
</template>

<script setup lang="ts">
import { Header } from './components/Header';
import { ref, onMounted, provide } from 'vue';
import { HomePage } from './pages';
import { ConfigProvider } from 'ant-design-vue';
import { LOCAL_STORAGE_CART_KEY, LOCAL_STORAGE_FAVOURITES_KEY } from './common/constants';
import { CART_INJECTION_KEY, FAVOURITES_INJECTION_KEY } from './common/injectionKeys';
import type { FavouritesMap } from './types/FavouritesMap.type';
import type { CartProductsMap } from './types/CartProductsMap.type';
import type { IProduct } from './types/Product.interface';

const favouriteProductsMap = ref<FavouritesMap>({});
const cartProductsMap = ref<CartProductsMap>({});

const onChangeFavouriteProductsMap = (id: number) => {
  if (favouriteProductsMap.value[id]) {
    delete favouriteProductsMap.value[id];
  } else {
    favouriteProductsMap.value[id] = true;
  }

  localStorage.setItem(LOCAL_STORAGE_FAVOURITES_KEY, JSON.stringify(favouriteProductsMap.value));
};

const onChangeCartProductsMap = (product: IProduct) => {
  if (cartProductsMap.value[product.id]) {
    delete cartProductsMap.value[product.id];
  } else {
    cartProductsMap.value[product.id] = product;
  }

  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartProductsMap.value));
};

onMounted(() => {
  const favouritesItemsMap = localStorage.getItem(LOCAL_STORAGE_FAVOURITES_KEY);
  const cartItemsMap = localStorage.getItem(LOCAL_STORAGE_CART_KEY);

  favouriteProductsMap.value = favouritesItemsMap
    ? (JSON.parse(favouritesItemsMap) as FavouritesMap)
    : [];
  cartProductsMap.value = cartItemsMap ? (JSON.parse(cartItemsMap) as CartProductsMap) : [];
});

provide(FAVOURITES_INJECTION_KEY, {
  onChangeFavouriteProductsMap,
  favouriteProductsMap,
});

provide(CART_INJECTION_KEY, {
  cartProductsMap,
  onChangeCartProductsMap,
});
</script>
