import type { InjectionKey } from 'vue';

export type ExtractGeneric<Type> = Type extends InjectionKey<infer X> ? X : never;
