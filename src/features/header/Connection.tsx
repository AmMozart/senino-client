import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';
import { useNavigate } from 'react-router-dom';
import ClickAnimation from '../styles/ClickAnimation';

interface IConnectionProps {
  isConnect: boolean;
}

export const Connection: React.FunctionComponent<IConnectionProps> = ({
  isConnect,
}) => {
  const navigate = useNavigate();

  const clickHandler: MouseEventHandler<HTMLDivElement> = () => {
    navigate('Connect');
  };

  return (
    <ClickAnimation>
      <StyledStatusButton onClick={clickHandler}>
        <WarningAnimation isWarning={!isConnect}>
          <FontAwesomeIcon icon={faNetworkWired} />
        </WarningAnimation>
      </StyledStatusButton>
    </ClickAnimation>
  );
};
