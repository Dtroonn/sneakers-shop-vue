import type { IProduct } from './Product.interface';

export type CartProductsMap = Partial<Record<number, IProduct>>;
