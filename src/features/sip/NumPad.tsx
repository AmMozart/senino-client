import React, { useCallback } from 'react';
import styled from 'styled-components';

import NumField from './NumField';
import {
  callNumber,
  call,
  addCallNumber,
  deleteCallNumberChar,
  toggleContacts,
} from './sipSlice';
import TextField from './TextField';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

const StyledNumPad = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NumPad: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const number = useAppSelector(callNumber);
  const dispatch = useAppDispatch();

  const addNumber = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target instanceof HTMLButtonElement) {
        dispatch(addCallNumber(event.target.innerText));
      }
    },
    [addCallNumber]
  );

  const deleteChar = useCallback(() => {
    dispatch(deleteCallNumberChar());
  }, [deleteCallNumberChar]);

  const startCall = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      dispatch(call());
    },
    [call]
  );

  const openContacts = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      dispatch(toggleContacts());
    },
    [call]
  );

  return (
    <StyledNumPad className={className}>
      <TextField text={number} deleteChar={deleteChar} />
      <NumField
        numberClick={addNumber}
        callClick={startCall}
        contactsClick={openContacts}
      />
    </StyledNumPad>
  );
};

export default NumPad;
