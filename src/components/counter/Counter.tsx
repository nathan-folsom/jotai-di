import React from "react";
import styled from "styled-components";
import CounterButton from "./CounterButton";
import useIncrement from "../../hooks/useIncrement";
import useDecrement from "../../hooks/useDecrement";
import { counterAtom } from "../../App";
import { useAtomValue } from "jotai";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;


export type CounterProps = {
  scope?: symbol;
};

export default function Counter({ scope }: CounterProps) {
  const onIncrement = useIncrement(scope);
  const onDecrement = useDecrement(scope);
  const value = useAtomValue(counterAtom, scope);

  return (
    <Container>
      <CounterButton onClick={onDecrement} title={"-"}/>
      {value}
      <CounterButton onClick={onIncrement} title={"+"}/>
    </Container>
  );
}
