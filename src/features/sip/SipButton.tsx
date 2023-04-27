import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledSipButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  height: 60px;
  margin: 0 10px;
  color: rgb(208 208 208);
  border: 1px solid rgb(16 16 16);
  border-radius: 20px;
  box-shadow: rgb(57 57 57) 0 1px;

  background: ${({ color }) =>
    color === 'black'
      ? 'linear-gradient(0deg, black, rgb(81, 81, 81))'
      : color === 'green'
      ? 'linear-gradient(0deg, rgb(0 60 3), rgb(67, 160, 71))'
      : color === 'red'
      ? 'linear-gradient(0deg, rgb(60 0 0), rgb(160 67 67))'
      : 'linear-gradient(0deg, rgb(1 0 60), rgb(67 69 160))'};

  & svg {
    padding-right: 10%;
    border-right: 1px solid;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0 0 15px #000;
  }

  @media (max-width: 840px) {
    width: 80px;

    & svg {
      padding: 0;
      border-right: none;
    }

    & span {
      display: none;
    }
  }

  @media (max-width: 400px) {
    width: 60px;
  }
`;

interface CallButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon: IconProp;
  color?: 'black' | 'green' | 'red' | 'blue';
}

const SipButton: React.FC<CallButtonProps> = ({
  onClick,
  title,
  icon,
  color = 'black',
  className,
}) => {
  return (
    <StyledSipButton className={className} onClick={onClick} color={color}>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </StyledSipButton>
  );
};

export default React.memo(SipButton);
