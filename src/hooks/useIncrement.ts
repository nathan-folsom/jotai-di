import { useCallback } from "react";
import { useUpdateAtom } from "jotai/utils";
import { counterAtom } from "../App";

export default function useIncrement(scope?: symbol) {
  const setCounter = useUpdateAtom(counterAtom, scope);

  return useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);
}
