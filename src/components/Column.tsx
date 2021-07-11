import React, { ReactNode } from 'react';
import { ColumnContainer, ColumnTitle } from '../styled/styled';

interface ColumnProps {
  text: string
}

export const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>): JSX.Element => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
}