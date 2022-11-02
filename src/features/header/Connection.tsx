import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

interface IConnectionProps {
    isConnect: boolean;
}

export const Connection: React.FunctionComponent<IConnectionProps> = ({ isConnect }) => {
  return (
    <StyledStatusButton>
      <WarningAnimation isWarning={!isConnect}>
        <FontAwesomeIcon icon={faNetworkWired}/>
      </WarningAnimation>
    </StyledStatusButton>
  );
};
