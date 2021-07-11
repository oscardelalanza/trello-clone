import React from 'react';
import { CardContainer } from '../styled/styled';

interface CardProps {
  text: string
}

export const Card = ({ text }: CardProps): JSX.Element => {
  return <CardContainer>{text}</CardContainer>
};
