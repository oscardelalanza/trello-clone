import React, { ReactNode } from 'react';
import { ColumnContainer, ColumnTitle } from '../styled/styled';

interface ColumnProps {
  text: string
}

export const Column = ({ text }: ColumnProps): JSX.Element => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
    </ColumnContainer>
  );
}