import React from "react";
import { PrimitiveAtom, useAtom } from "jotai";

export type CounterProps = {
  atom: PrimitiveAtom<number>;
};

export default function Counter({ atom }: CounterProps) {
  const [value, setAtom] = useAtom(atom);

  return (
    <button onClick={() => setAtom(value + 1)}>{value}</button>
  );
}
