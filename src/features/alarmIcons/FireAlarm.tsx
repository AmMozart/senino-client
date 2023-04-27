import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

interface FireAlarmProps {
  isFireAlarm?: boolean;
}

const FireAlarm: React.FC<FireAlarmProps> = ({ isFireAlarm = false }) => {
  return (
    <StyledStatusButton>
      <WarningAnimation isWarning={isFireAlarm}>
        <FontAwesomeIcon icon={faFire} />
      </WarningAnimation>
    </StyledStatusButton>
  );
};

export default React.memo(FireAlarm);
