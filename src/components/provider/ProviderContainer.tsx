import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background: white;
  flex: 1 1 0;
  padding: 15px;
  max-width: 300px;
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
