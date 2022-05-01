import { useAtom } from "jotai";
import { useMemo } from 'react';
import { Service, ServiceSetters, SetterCall } from './types';

type SetterMap<T extends ServiceSetters> = {
  [key in keyof T]: (args: Parameters<T[key]>) => void;
}

export default function useService<T extends Record<PropertyKey, any>, U extends ServiceSetters>(service: Service<T, U>): [T, U] {
  const [getters, set] = useAtom(service.baseAtom);
  const setters = service.setterNames.reduce<SetterMap<U>>((acc, curr) => {
    acc[curr] = args => set({ key: curr, args } as unknown as SetterCall<U>);
    return acc;
  }, {} as SetterMap<U>) as unknown as U;
  return useMemo(() => [getters, setters], [getters, setters]);
}
