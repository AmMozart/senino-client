import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

interface SecurityProps {
  isInvasion?: boolean;
}

const Security: React.FC<SecurityProps> = ({ isInvasion = false }) => {
  return (
    <StyledStatusButton>
      <WarningAnimation isWarning={isInvasion}>
        <FontAwesomeIcon icon={faPersonWalking} />
      </WarningAnimation>
    </StyledStatusButton>
  );
};

export default React.memo(Security);
