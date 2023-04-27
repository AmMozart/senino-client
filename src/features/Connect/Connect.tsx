import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../app/hooks';
import { isConnect } from '../controller/controllerSlice';
import StyledContent from '../styles/StyledContent';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';

const StyledMapContent = styled(StyledContent)<{ connect: boolean }>`
  --width-block: 500px;
  --color: ${(p) => (p.connect ? '#1f9d11' : '#d41f37')};
  --size: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 9em;

  & div {
    position: relative;
    width: var(--width-block);
    border-bottom: 5px dashed var(--color);
  }

  & div::before {
    content: '${(p) => (p.connect ? 'ok' : 'error')}';

    position: absolute;
    top: calc(var(--size) / -2);
    left: calc((var(--width-block) - var(--size)) / 2);

    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--size);
    height: var(--size);

    font-size: 1rem;
    color: #e4ff00;

    border: 2px solid var(--color);
    border-radius: 50%;
    box-shadow: inset 0 0 30px var(--color);
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
