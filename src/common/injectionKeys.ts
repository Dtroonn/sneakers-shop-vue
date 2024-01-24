import type { InjectionKey, Ref } from 'vue';

export const FAVOURITES_INJECTION_KEY = Symbol('favourites') as InjectionKey<{
  favouritesProducts: Ref<Record<number, boolean>>;
  onChangeFavourites: (productId: number) => void;
}>;
