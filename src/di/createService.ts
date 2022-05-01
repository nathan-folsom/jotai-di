import { atom, Getter, Setter } from 'jotai';
import { Service, ServiceSetters, SetterCall } from './types';

export default function createService<Getters extends Record<PropertyKey, any>,
  Setters extends ServiceSetters>
(
  initializeGetters: (get: Getter) => Getters,
  initializeSetters: (get: Getter, set: Setter) => Setters
): Service<Getters, Setters> {
  return {
    baseAtom: atom(initializeGetters,
      (get, set, update: SetterCall<Setters>) =>
        // @ts-ignore
        initializeSetters(get, set)[update.key](update.args)),
    setterNames: Object.keys((initializeSetters as () => Record<PropertyKey, any>)())
  }
}
