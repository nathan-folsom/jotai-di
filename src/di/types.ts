import { WritableAtom } from 'jotai';

export type ServiceSetters = Record<PropertyKey, (...args: any[]) => void>;

export type SetterCall<Setters extends ServiceSetters> = {
  [key in keyof Setters]: {
    key: key;
    args: Parameters<Setters[key]>;
  }
};

export type Service<Getters, Setters extends ServiceSetters> = {
  baseAtom: WritableAtom<Getters, SetterCall<Setters>>;
  setterNames: (keyof Setters)[];
}
