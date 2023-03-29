import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Password from './Password';
import PasswordState from './PasswordState';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledDigitalPanel = styled.section`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: black;
  border-radius: 20px;

  & section {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

  & input {
    grid-column: 1 / 4;
    text-align: center;
  }

  & .close {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;
    font-size: 2em;
    border-radius: 20px;

    box-shadow: rgb(57, 57, 57) 0px 1px;
    border: 1px solid rgb(16, 16, 16);

    background: linear-gradient(0deg, black, rgb(81, 81, 81));
    color: rgb(208, 208, 208);
  }

  & h3 {
    color: #e1e1e1;
  }

  @media (max-height: 500px) {
    & section {
      grid-gap: 5px;
    }

    & h3 {
      font-size: 0.8em;
    }

    & .close {
      width: 60px;
      height: 60px;
      font-size: 1.5em;
      border-radius: 15px;
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
      <div className='close' onClick={onClickClose} data-testid='closeButton'>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <h3>Введите пароль</h3>

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
