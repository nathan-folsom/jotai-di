import React from 'react';
import styled from 'styled-components';
import ProviderContainer from "./components/provider/ProviderContainer";
import { atom, Provider } from "jotai";
import Counter from "./components/counter/Counter";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 0;
`;

export const counterAtom = atom(0);

const customScope = Symbol();

function App() {
  return (
    <Container>
      <ProviderContainer>
        <Title>Global Provider</Title>
        <Counter />
      </ProviderContainer>
      <ProviderContainer>
        <Title>Normal Provider</Title>
        <Provider>
          <Counter />
        </Provider>
      </ProviderContainer>
      <ProviderContainer>
        <Title>Scoped Provider</Title>
        <Provider scope={customScope}>
          <Counter scope={customScope} />
        </Provider>
      </ProviderContainer>
    </Container>
  );
}

export default App;
