import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  font-size: 1.2em;
  color: #e1e1e1;

  background: #2e2e2e;
  border: 1px solid #676767;
  border-radius: 20px;

  &:active {
    background: #fff;
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
