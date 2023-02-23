import React from 'react';
import styled from 'styled-components';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import ClickAnimation from '../styles/ClickAnimation';

const StyledSipIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  color: var(--btn-text-color);
  border: 1px solid #007e1f;
  border-radius: 50%;
  background-color: rgb(64 143 57 / 50%);
  font-size: 1.5em;
  box-shadow: inset 0 0 10px #207b46;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;

const SipIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate('/Sip');
    }, 300);
  };

  return (
    <ClickAnimation>
      <StyledSipIcon onClick={handleClick}>
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
      </StyledSipIcon>
    </ClickAnimation>
  );
};

export default SipIcon;
