import React from 'react';
import styled from 'styled-components';
import ProviderContainer from "./components/provider/ProviderContainer";
import { atom } from "jotai";

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

function App() {
  return (
    <Container>
      <ProviderContainer>
        <Title>Global Provider</Title>
      </ProviderContainer>
      <ProviderContainer>
        <Title>Normal Provider</Title>
      </ProviderContainer>
      <ProviderContainer>
        <Title>Scoped Provider</Title>
      </ProviderContainer>
    </Container>
  );
}

export default App;
