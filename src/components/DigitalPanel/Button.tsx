import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  border-radius: 20px;

  box-shadow: rgb(57 57 57) 0 1px;
  border: 1px solid rgb(16 16 16);

  background: linear-gradient(0deg, black, rgb(81 81 81));
  color: rgb(208 208 208);

  &:active {
    background: linear-gradient(0deg, black, rgb(0 164 49));
  }

  @media (max-height: 500px) {
    & {
      width: 60px;
      height: 60px;
      font-size: 0.8em;
      border-radius: 15px;
    }
  }
`;

interface ButtonProps {
  text: string;
  onClick: (text: string) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const handleClick = () => {
    onClick(text);
  };

  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
