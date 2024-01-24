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
import { LOCAL_STORAGE_FAVOURITES_KEY } from './common/constants';
import { FAVOURITES_INJECTION_KEY } from './common/injectionKeys';

const favouritesProducts = ref<Record<number, boolean>>([]);

const onChangeFavourites = (id: number) => {
  if (favouritesProducts.value[id]) {
    delete favouritesProducts.value[id];
  } else {
    favouritesProducts.value[id] = true;
  }

  localStorage.setItem(LOCAL_STORAGE_FAVOURITES_KEY, JSON.stringify(favouritesProducts.value));
};

onMounted(() => {
  const favouritesItems = localStorage.getItem(LOCAL_STORAGE_FAVOURITES_KEY);
  favouritesProducts.value = favouritesItems
    ? (JSON.parse(favouritesItems) as Record<number, boolean>)
    : [];
});

provide(FAVOURITES_INJECTION_KEY, {
  onChangeFavourites,
  favouritesProducts,
});
</script>
