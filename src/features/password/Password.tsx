import React from 'react';

import {
  change,
  clear,
  isShow,
  close,
  password,
  passwordState,
  verify,
} from './passwordSlice';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DigitalPanel from '../../components/DigitalPanel';

const Password: React.FC = () => {
  const dispatch = useAppDispatch();
  const isShowPasswordPad = useAppSelector(isShow);
  const text = useAppSelector(password);
  const state = useAppSelector(passwordState);

  const onClickCancel = () => {
    dispatch(clear());
  };

  const onClickDigit = (text: string): void => {
    dispatch(change(text));
  };

  const onClickOk = (): void => {
    dispatch(verify());
  };

  const onClickClose = (): void => {
    dispatch(close());
  };

  return (
    <>
      {isShowPasswordPad && (
        <DigitalPanel
          text={text}
          state={state}
          onClickDigit={onClickDigit}
          onClickCancel={onClickCancel}
          onClickOk={onClickOk}
          onClickClose={onClickClose}
        />
      )}
    </>
  );
};

export default Password;
