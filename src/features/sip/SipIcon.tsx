import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes, css } from 'styled-components';

import ClickAnimation from '../styles/ClickAnimation';
import { useAppSelector } from '../../app/hooks';

import { isRing } from './sipSlice';

const iconAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

const phoneAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(35deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const oneBorderAnimation = keyframes`
  0% {
    border-top-color: transparent;
  }
  
  49% {
    border-top-color: transparent;
  }

  50% {
    border-top-color: green;
  }

  to {
    border-top-color: green;
  }
`;

const twoBorderAnimation = keyframes`
  0% {
    border-top-color: transparent;
  }
  
  69% {
    border-top-color: transparent;
  }

  70% {
    border-top-color: green;
  }

  to {
    border-top-color: green;
  }
`;

const StyledSipIcon = styled.div<{ isRing: boolean }>`
  --size: 80px;

  cursor: pointer;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--size);
  height: var(--size);

  font-size: 20px;
  color: var(--btn-text-color);

  background-color: rgb(64 143 57 / 50%);
  border-radius: 50%;
  box-shadow: inset 0 0 10px #207b46;
  z-index: 1;

  ${({ isRing }) =>
    isRing
      ? css`
          animation: ${iconAnimation} 2s linear infinite;

          & svg {
            animation: ${phoneAnimation} 0.5s ease-in infinite;
          }

          &::before,
          &::after {
            content: '';

            position: absolute;
            transform: rotate(45deg);

            border: 6px solid green;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-radius: 50%;
          }

          &::before {
            width: calc(var(--size) + 30px);
            height: calc(var(--size) + 30px);
            animation: ${oneBorderAnimation} 2s linear infinite;
          }

          &::after {
            width: calc(var(--size) + 70px);
            height: calc(var(--size) + 70px);
            animation: ${twoBorderAnimation} 2s linear infinite;
          }
        `
      : ''}

  @media (max-width: 576px) {
    --size: 50px;
  }
`;

const SipIcon = () => {
  const navigate = useNavigate();
  const stateRing = useAppSelector(isRing);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setTimeout(() => {
      navigate('/Sip');
    }, 300);
  };

  return (
    <ClickAnimation>
      <StyledSipIcon isRing={stateRing} onClick={handleClick}>
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
      </StyledSipIcon>
    </ClickAnimation>
  );
};

export default SipIcon;
