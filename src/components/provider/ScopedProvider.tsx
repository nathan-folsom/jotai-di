import React from "react";
import { Provider } from "jotai";
import Counter from "../counter/Counter";
import ProviderContainer from "./ProviderContainer";
import { Title } from "./subcomponents/Title";

const customScope = Symbol();

export default function ScopedProvider() {
  return (
    <ProviderContainer>
      <Title>Scoped Provider</Title>
      <Provider scope={customScope}>
        <Counter scope={customScope} />
      </Provider>
    </ProviderContainer>
  );
}
