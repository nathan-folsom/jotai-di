import React from 'react';
import styled from 'styled-components';
import { atom } from "jotai";
import GlobalProvider from "./components/provider/GlobalProvider";
import NormalProvider from "./components/provider/NormalProvider";
import ScopedProvider from "./components/provider/ScopedProvider";

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



const Description = styled.p`
  font-size: 1.25rem;
  margin: 5px;
`;

export const counterAtom = atom(0);

function App() {
  return (
    <Container>
      <PageTitle>Jotai Provider Playground</PageTitle>
      <Description>Explore and experiment with Jotai providers and how they capture state from atoms that are used within!</Description>
      <Description>Red button remounts its children, use it to see how state is reset when a provider unmounts.</Description>
      <GridContainer>
        <GlobalProvider />
        <NormalProvider />
        <ScopedProvider />
      </GridContainer>
    </Container>
  );
}

export default App;
