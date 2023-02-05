import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Password from './Password';
import PasswordState from './PasswordState';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledDigitalPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  border-radius: 20px;
  z-index: 99;

  & section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  & input {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  & .close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 80px;
    height: 80px;
    background-color: #2e2e2e;
    font-size: 2.5em;
    color: #e1e1e1;
    border: 1px solid #676767;
    border-radius: 20px;
  }

  & h1 {
    color: #e1e1e1;
  }

  @media (max-height: 500px) {
    & section {
      grid-gap: 5px;
    }
    & h1 {
      font-size: 0.8em;
    }
    & .close {
      width: 60px;
      height: 60px;
      border-radius: 15px;
      font-size: 1.5em;
    }
  }
`;

interface DigitalPanelProps {
  text: string;
  state: PasswordState;
  onClickDigit: (text: string) => void;
  onClickCancel: () => void;
  onClickOk: () => void;
  onClickClose: () => void;
}

const DigitalPanel: React.FC<DigitalPanelProps> = ({
  text,
  state,
  onClickDigit,
  onClickCancel,
  onClickOk,
  onClickClose,
}) => {
  return (
    <StyledDigitalPanel>
      <div className='close' onClick={onClickClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <h1>Введите пароль</h1>

      <section>
        <Password text={text} state={state} />
        <Button text={'1'} onClick={onClickDigit} />
        <Button text={'2'} onClick={onClickDigit} />
        <Button text={'3'} onClick={onClickDigit} />
        <Button text={'4'} onClick={onClickDigit} />
        <Button text={'5'} onClick={onClickDigit} />
        <Button text={'6'} onClick={onClickDigit} />
        <Button text={'7'} onClick={onClickDigit} />
        <Button text={'8'} onClick={onClickDigit} />
        <Button text={'9'} onClick={onClickDigit} />
        <Button text={'Стереть'} onClick={onClickCancel} />
        <Button text={'0'} onClick={onClickDigit} />
        <Button text={'OK'} onClick={onClickOk} />
      </section>
    </StyledDigitalPanel>
  );
};

export default DigitalPanel;
