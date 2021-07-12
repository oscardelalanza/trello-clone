import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styled/styled';

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps): JSX.Element => {
  const [text, setText] = useState('');

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={e => setText(e.target.value)}/>
      <NewItemButton onClick={() => onAdd(text)} children="Create"/>
    </NewItemFormContainer>
  );
};
