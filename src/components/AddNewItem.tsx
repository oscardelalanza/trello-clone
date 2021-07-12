import React, { useState } from 'react';
import { AddItemButton } from '../styled/styled';

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}