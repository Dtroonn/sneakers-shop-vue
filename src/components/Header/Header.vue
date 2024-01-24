<template>
  <header :class="['_container', 'lalka__trololo', classes.header]">
    <div :class="classes['logo-block']">
      <img :class="classes['logo-block__img']" :src="logoUrl" alt="logo" />
      <div>
        <h1 :class="classes['logo-block__title']">VUE SNEAKERS</h1>
        <h2 :class="classes['logo-block__subtitle']">Магазин лучших кроссовок</h2>
      </div>
    </div>
    <div :class="classes.actions">
      <template v-for="(linkItem, index) in linksItems" :key="index">
        <CartDrawer v-if="index === 0">
          <ActionsItem :Icon="linkItem.Icon" :title="linkItem.title" isBold />
        </CartDrawer>
        <ActionsItem v-else :Icon="linkItem.Icon" :title="linkItem.title" />
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/images/logo.png';
import { ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons-vue';
import { CartDrawer } from './CartDrawer';
import { ActionsItem } from './ActionsItem';

const linksItems: { Icon: typeof UserOutlined; title: string }[] = [
  {
    Icon: ShoppingCartOutlined,
    title: '1205 руб.',
  },
  {
    Icon: HeartOutlined,
    title: 'Избранное',
  },
  {
    Icon: UserOutlined,
    title: 'Профиль',
  },
];
</script>

<style module="classes">
.header {
  display: flex;
  padding: 40px 0;
  align-items: center;
  justify-content: space-between;
}

.logo-block {
  display: flex;
  gap: 0 20px;
  align-items: center;
  margin: 0 20px 0 0;

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

.actions {
  display: flex;
  gap: 0 20px;
}
</style>
