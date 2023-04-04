import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const StyledTextField = styled.section`
  position: relative;

  width: 200px;

  background: #6a6a6a;
  border: 3px solid #343434;
  border-radius: 20px;

  & .input {
    width: 150px;
    height: 60px;

    font-size: 1.2em;
    color: #d3d3d3;
    text-align: center;

    background: #fff0;
  }

  & .input:focus {
    outline: none;
  }

  & .delete {
    cursor: pointer;

    position: absolute;
    top: 15px;
    right: 10px;

    font-size: 30px;
  }

  & .delete:active {
    color: #d3d3d3;
  }
`;

interface TextFieldProps {
  text?: string;
  deleteChar?: React.MouseEventHandler;
}

const TextField: React.FC<TextFieldProps> = ({ text, deleteChar }) => {
  return (
    <StyledTextField data-testid={'text-field'}>
      <input
        className={'input'}
        type={'text'}
        value={text}
        readOnly
        maxLength={12}
      />
      <FontAwesomeIcon
        className={'delete'}
        icon={faDeleteLeft}
        onClick={deleteChar}
        data-testid={'delete-button'}
      />
    </StyledTextField>
  );
};

export default React.memo(TextField);
