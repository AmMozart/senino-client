import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

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
