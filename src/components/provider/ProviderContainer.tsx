import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  max-width: 200px;
  margin: 5px;
`;

export type ProviderContainerProps = PropsWithChildren<any>;

export default function ProviderContainer({ children }: ProviderContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
