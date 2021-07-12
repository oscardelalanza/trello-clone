import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styled/styled';
import { AddNewItem } from './AddNewItem';

interface ColumnProps {
  text: string
}

export const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>): JSX.Element => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+ Add new task" onAdd={console.log} dark/>
    </ColumnContainer>
  );
}