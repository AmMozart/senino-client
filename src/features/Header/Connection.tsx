import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ClickAnimation from '../styles/ClickAnimation';
import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

const StyledConnection = styled(StyledStatusButton)`
  color: ${({ isConnect }: ConnectionProps) =>
    isConnect ? '#00a431' : '#a40019'};

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 100%;
  }

  & span {
    font-size: 10px;
  }
`;

interface ConnectionProps {
  isConnect: boolean;
}

export const Connection: React.FunctionComponent<ConnectionProps> = ({
  isConnect,
}) => {
  const navigate = useNavigate();

  const clickHandler: MouseEventHandler<HTMLDivElement> = () => {
    navigate('Connect');
  };

  return (
    <ClickAnimation>
      <StyledConnection onClick={clickHandler} isConnect={isConnect}>
        <WarningAnimation isWarning={!isConnect}>
          <FontAwesomeIcon icon={faNetworkWired} />
          <span>Сеть</span>
        </WarningAnimation>
      </StyledConnection>
    </ClickAnimation>
  );
};
