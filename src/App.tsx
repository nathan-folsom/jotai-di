import React from 'react';
import styled from 'styled-components';
import ProviderContainer from "./components/provider/ProviderContainer";
import { atom, Provider } from "jotai";
import Counter from "./components/counter/Counter";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;

const GridContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content;
  grid-gap: 20px;
`;

const PageTitle = styled.h1`
  margin-top: 0;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin: 5px;
`;

export const counterAtom = atom(0);

const customScope = Symbol();

function App() {
  return (
    <Container>
      <PageTitle>Jotai Provider Playground</PageTitle>
      <Description>Explore and experiment with Jotai providers and how they capture state from atoms that are used within!</Description>
      <Description>Red button remounts its children, use it to see how state is reset when a provider unmounts.</Description>
      <GridContainer>
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
      </GridContainer>
    </Container>
  );
}

export default App;
