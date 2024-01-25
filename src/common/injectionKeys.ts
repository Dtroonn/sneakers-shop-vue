import type { CartProductsMap } from '@/types/CartProductsMap.type';
import type { FavouritesMap } from '@/types/FavouritesMap.type';
import type { IProduct } from '@/types/Product.interface';
import type { InjectionKey, Ref } from 'vue';

export const FAVOURITES_INJECTION_KEY = Symbol('favourites') as InjectionKey<{
  favouriteProductsMap: Ref<FavouritesMap>;
  onChangeFavouriteProductsMap: (productId: number) => void;
}>;

export const CART_INJECTION_KEY = Symbol('cart') as InjectionKey<{
  cartProductsMap: Ref<CartProductsMap>;
  onChangeCartProductsMap: (item: IProduct) => void;
}>;
