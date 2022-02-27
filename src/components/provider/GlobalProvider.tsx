import React from "react";
import Counter from "../counter/Counter";
import ProviderContainer from "./ProviderContainer";
import { Title } from "./subcomponents/Title";

export default function GlobalProvider() {
  return (
    <ProviderContainer>
      <Title>Global Provider</Title>
      <Counter />
    </ProviderContainer>
  );
}
