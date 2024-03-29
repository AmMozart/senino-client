import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ClickAnimation from '../styles/ClickAnimation';
import StyledStatusButton from '../styles/StyledStatusButton';

const StyledHome = styled(StyledStatusButton)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2em;

  & span {
    font-size: 10px;
  }
`;

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <ClickAnimation>
      <StyledHome onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
        <span>Дом</span>
      </StyledHome>
    </ClickAnimation>
  );
};

export default Home;
