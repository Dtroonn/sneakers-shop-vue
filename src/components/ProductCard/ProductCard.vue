<template>
  <Card hoverable :class="classes.card">
    <Button
      @click="emit('clickFavouriteBtn')"
      :type="isFavourite ? 'primary' : 'default'"
      :danger="isFavourite"
      :class="[classes['card__fav-button'], !isFavourite && classes['card__fav-button_hv']]"
    >
      <template #icon>
        <HeartOutlined />
      </template>
    </Button>
    <template #cover>
      <img :class="classes.card__img" alt="example" :src="imgUrl" />
    </template>
    <CardMeta :title="title" />
    <div :class="classes.card__actions">
      <div :class="classes['price-block']">
        <div :class="classes['price-block__title']">Цена:</div>
        <div :class="classes['price-block__price']">{{ price }}</div>
      </div>
      <Button :type="isAddedToCard ? 'primary' : 'default'" @click="emit('clickCartBtn')">
        <template #icon>
          <component :is="isAddedToCard ? CheckOutlined : PlusOutlined"></component
        ></template>
      </Button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta, Button } from 'ant-design-vue';
import { HeartOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons-vue';
import type { ProductCardProps } from './ProductCard.props';
defineProps<ProductCardProps>();
const emit = defineEmits<{
  clickFavouriteBtn: [];
  clickCartBtn: [];
}>();
</script>

<style lang="postcss" module="classes">
.card {
  cursor: auto;
  :global(.ant-card-meta-title) {
    white-space: initial;
  }

  &__img {
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__fav-button {
    position: absolute;
    top: 5px;
    right: 5px;
    &_hv {
      &:hover {
        color: #ff7875 !important;
        border-color: #ff7875 !important;
      }
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.price-block {
  margin: 14px 10px 0 0;
  &__title {
    color: #bdbdbd;
    font-weight: 500;
  }

  &__price {
    font-weight: 700;
  }
}
</style>
