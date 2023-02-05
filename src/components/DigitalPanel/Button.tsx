import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #2e2e2e;
  border: 1px solid #676767;
  border-radius: 20px;
  color: #e1e1e1;
  font-size: 1.2em;
  cursor: pointer;

  &:active {
    background: #ffffff;
  }

  @media (max-height: 500px) {
    & {
      width: 60px;
      height: 60px;
      border-radius: 15px;
      font-size: 0.8em;
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
