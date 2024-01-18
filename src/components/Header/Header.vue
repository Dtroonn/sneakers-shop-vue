<template>
  <header :class="['_container', 'lalka__trololo', classes.header]">
    <div :class="classes['logo-block']">
      <img :class="classes['logo-block__img']" :src="logoUrl" alt="logo" />
      <div>
        <h1 :class="classes['logo-block__title']">VUE SNEAKERS</h1>
        <h2 :class="classes['logo-block__subtitle']">Магазин лучших кроссовок</h2>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/images/logo.png';
</script>

<style module="classes">
.header {
  display: flex;
  padding: 40px 0;
}

.logo-block {
  display: flex;
  gap: 0 20px;
  align-items: center;

  &__img {
    width: 40px;
    flex: 0 0 40px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
  }

  &__subtitle {
    color: #9d9d9d;
  }
}
</style>
