import React from "react";
import { Provider } from "jotai";
import Counter from "../counter/Counter";
import ProviderContainer from "./ProviderContainer";
import { Title } from "./subcomponents/Title";

export default function NormalProvider() {
  return (
    <ProviderContainer>
      <Title>Normal Provider</Title>
      <Provider>
        <Counter />
      </Provider>
    </ProviderContainer>
  );
}
