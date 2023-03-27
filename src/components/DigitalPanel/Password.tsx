import React, { createRef } from 'react';
import styled from 'styled-components';
import PasswordState from './PasswordState';

const StyledPassword = styled.input`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 80px;

  font-size: 3em;
  color: #565656;

  background: #bcbcbc;
  border: 1px solid #676767;
  border-radius: 20px;

  @media (max-height: 500px) {
    & {
      width: 195px;
      height: 65px;
      border-radius: 10px;
    }
  }
`;

const StyledSuccess = styled(StyledPassword)`
  font-size: 1.5em;
  color: #e1e1e1;
  background: #287622;

  @media (max-height: 500px) {
    & {
      font-size: 1em;
    }
  }
`;

const StyledUnsuccess = styled(StyledPassword)`
  font-size: 1.5em;
  color: #e1e1e1;
  background: #7e3131;

  @media (max-height: 500px) {
    & {
      font-size: 1em;
    }
  }
`;

interface PasswordProps {
  text: string;
  state: PasswordState;
}

const Password: React.FC<PasswordProps> = ({ text, state }) => {
  const inputRef = createRef<HTMLInputElement>();

  const handleClickDown = () => {
    if (inputRef.current) inputRef.current.type = 'text';
  };
  const handleClickUp = () => {
    if (inputRef.current) inputRef.current.type = 'password';
  };

  return state === PasswordState.Correct ? (
    <StyledSuccess type='input' value={'Успешно'} readOnly={true} />
  ) : state === PasswordState.Incorrect ? (
    <StyledUnsuccess type='input' value={'Ошибка'} readOnly={true} />
  ) : (
    <StyledPassword
      type='password'
      ref={inputRef}
      onMouseDown={handleClickDown}
      onMouseUp={handleClickUp}
      onTouchStart={handleClickDown}
      onTouchEnd={handleClickUp}
      value={text}
      placeholder={text}
      readOnly={true}
    />
  );
};

export default Password;
