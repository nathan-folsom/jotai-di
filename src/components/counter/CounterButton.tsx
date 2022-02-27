import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: whitesmoke;
  border-radius: 20px;
  width: 50px;
`;

export type CounterButtonProps = {
  onClick: () => void;
  title: string;
};

export default function CounterButton({ onClick, title }: CounterButtonProps) {
  return (
    <Button onClick={onClick}>
      {title}
    </Button>
  );
}
