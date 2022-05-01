import React from 'react';
import styled from 'styled-components';
import { atom } from "jotai";
import GlobalProvider from "./components/provider/GlobalProvider";
import NormalProvider from "./components/provider/NormalProvider";
import ScopedProvider from "./components/provider/ScopedProvider";
import ExampleComponent from './components/example/ExampleComponent';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
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
      <PageTitle>Jotai DI</PageTitle>
      <Description>It works I guess</Description>
      <ExampleComponent />
    </Container>
  );
}

export default App;
