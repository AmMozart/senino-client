import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector } from '../../app/hooks';
import { isConnect } from '../controller/controllerSlice';
import StyledContent from '../styles/StyledContent';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';
import styled from 'styled-components';

const StyledMapContent = styled(StyledContent)<{ connect: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 9em;

  --width-block: 500px;
  --color: ${(p) => (p.connect ? '#1f9d11' : '#d41f37')};
  --size: 70px;

  & div {
    position: relative;
    width: var(--width-block);
    border-bottom: 5px dashed var(--color);
  }

  & div::before {
    content: '${(p) => (p.connect ? 'Ok' : 'Error')}';
    position: absolute;
    width: var(--size);
    height: var(--size);
    left: calc((var(--width-block) - var(--size)) / 2);
    top: calc(var(--size) / -2);
    border: 2px solid var(--color);
    border-radius: 50%;
    box-shadow: inset 0 0 30px var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #e4ff00;
  }

  @media (max-width: 940px) {
    font-size: 7em;
    & div {
      --width-block: 350px;
    }
    & div::before {
      --size: 60px;
    }
  }

  @media (max-width: 760px) {
    font-size: 5em;
    & div {
      --width-block: 200px;
    }
    & div::before {
      --size: 50px;
    }
  }

  @media (max-width: 576px) {
    font-size: 3em;
    & div {
      --width-block: 100px;
    }
    & div::before {
      --size: 40px;
    }
  }
`;

const Connect: React.FC = () => {
  const connect = useAppSelector(isConnect);

  return (
    <StyledPage>
      <StyledTitle>Сеть</StyledTitle>
      <StyledMapContent connect={connect}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <div></div>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </StyledMapContent>
      <StyledTitle></StyledTitle>
    </StyledPage>
  );
};

export default Connect;
