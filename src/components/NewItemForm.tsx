import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styled/styled';
import { useFocus } from '../utils/useFocus';

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps): JSX.Element => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={e => setText(e.target.value)} ref={inputRef}/>
      <NewItemButton onClick={() => onAdd(text)} children="Create"/>
    </NewItemFormContainer>
  );
};
