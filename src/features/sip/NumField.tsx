import { faContactCard, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledNumField = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;

  & button {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 60px;
    height: 60px;

    color: rgb(208 208 208);

    background: linear-gradient(0deg, black, rgb(81 81 81));
    border: 1px solid rgb(16 16 16);
    border-radius: 20px;
    box-shadow: rgb(57 57 57) 0 1px;
  }

  & button:active {
    transform: scale(0.95);
    box-shadow: inset 0 0 15px #000;
  }

  & .call {
    color: green;
  }

  & .contacts {
    color: #1e9ecf;
  }
`;

interface NumFieldProps {
  numberClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  callClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  contactsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NumField: React.FC<NumFieldProps> = ({
  numberClick,
  callClick,
  contactsClick,
}) => {
  return (
    <StyledNumField onClick={numberClick}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>0</button>
      <button>#</button>
      <button className={'call'} onClick={callClick}>
        <FontAwesomeIcon icon={faPhoneFlip} />
      </button>
      <button>+</button>
      <button className={'contacts'} onClick={contactsClick}>
        <FontAwesomeIcon icon={faContactCard} />
      </button>
    </StyledNumField>
  );
};

export default React.memo(NumField);
