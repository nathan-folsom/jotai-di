import React, { ReactNode, useEffect, useRef } from 'react';
import { Option, PickerState } from '../types';
import styled from 'styled-components';
import { useUpdateAtom } from 'jotai/utils';
import initializeState from './functions/initializeState';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background: white;
  margin: 10px;
`;

export type PickerProps = {
  options: Option[];
  children: (state: PickerState) => ReactNode;
}

export default function Picker({ options, children }: PickerProps) {
  const state = useRef<PickerState>(initializeState());
  const setOptions = useUpdateAtom(state.current.optionsAtom);

  useEffect(() => {
    setOptions(options);
  }, [options, setOptions]);

  return (
    <Container>
      {children(state.current)}
    </Container>
  );
}
