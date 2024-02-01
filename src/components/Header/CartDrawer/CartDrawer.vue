<template>
  <button :class="classes.btn" @click="onOpenClick">
    <slot></slot>
  </button>
  <Drawer v-model:open="isOpen" title="Корзина">
    <div :class="classes.body">
      <div :class="classes.products" v-auto-animate>
        <CartItem
          v-for="product in cartData.cartProducts"
          :class="classes.products__item"
          :key="product.id"
          :title="product.name"
          :price="product.price"
          :img-url="product.imgUrl"
          @click-remove-btn="() => onChangeCartProductsMap(product)"
        />
      </div>
      <MoneyInfo title="Итого:" :value="cartData.totalPrice" />
      <MoneyInfo title="Налог 5%:" :value="cartData.tax" />
      <Button
        type="primary"
        shape="round"
        :size="'large'"
        :disabled="!cartData.cartProducts.length"
      >
        Оформить заказ <ArrowRightOutlined />
      </Button>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { Drawer, Button } from 'ant-design-vue';
import { ArrowRightOutlined } from '@ant-design/icons-vue';
import { defineModel, inject, computed } from 'vue';
import { CartItem } from '@/components/CartItem';
import { CART_INJECTION_KEY } from '@/common/injectionKeys';
import MoneyInfo from './MoneyInfo.vue';
import type { ExtractGeneric } from '@/types/ExtractGeneric.type';
import type { IProduct } from '@/types/Product.interface';

const { cartProductsMap, onChangeCartProductsMap } = inject(CART_INJECTION_KEY) as ExtractGeneric<
  typeof CART_INJECTION_KEY
>;

const cartData = computed(() => {
  const cartProducts = Object.values(cartProductsMap.value).filter(Boolean) as IProduct[];
  const totalPrice = cartProducts.reduce(
    (summ, product) => summ + parseInt(product.price.replace(/\$/, '')),
    0,
  );
  const tax = (totalPrice * 0.05).toFixed(2);

  return {
    cartProducts,
    totalPrice: `$${totalPrice}`,
    tax: `$${tax}`,
  };
});

const isOpen = defineModel<boolean>({ default: false });

const onOpenClick = () => {
  isOpen.value = true;
};
</script>

<style lang="postcss" module="classes">
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.btn {
  cursor: pointer;
}

.products {
  flex: 1 1 auto;
  &__item {
    margin: 0 0 20px 0;
  }
}
</style>
