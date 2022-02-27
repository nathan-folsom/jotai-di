import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  text-align: center;
  background: white;
  padding: 15px;
`;
const RefreshButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 10px;
  border: none;
  background: red;
  
  &:active {
    opacity: .5;
  }
`;
const PlaceHolder = styled.div`
  background: whitesmoke;
  width: 100%;
  height: 20px;
`;

export type ProviderContainerProps = PropsWithChildren<any>;

export default function ProviderContainer({ children }: ProviderContainerProps) {
  const [render, setRender] = useState<boolean>(true);

  const handleRemount = () => {
    setRender(false);
    setTimeout(() => setRender(true), 200);
  }

  return (
    <Container>
      <RefreshButton onClick={handleRemount}/>
      {render ? children : <PlaceHolder />}
    </Container>
  );
}
