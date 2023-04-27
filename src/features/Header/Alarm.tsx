import { faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

import AlarmIcons from '../alarmIcons/AlarmIcons';
import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

const StyledAlarm = styled.section<{ isOpen: boolean; isAlarm: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface AlarmProps {
  isAlarm?: boolean;
}

const Alarm: React.FC<AlarmProps> = ({ isAlarm = false }) => {
  const [show, setShow] = useState(false);

  const toggleIcon = () => {
    setShow((prev) => !prev);
  };

  const icon = show ? faTimes : faBell;

  return (
    <StyledAlarm isOpen={show} isAlarm={isAlarm}>
      <StyledStatusButton onClick={toggleIcon}>
        <WarningAnimation isWarning={isAlarm}>
          <FontAwesomeIcon icon={icon} />
        </WarningAnimation>
      </StyledStatusButton>

      <AlarmIcons isOpen={show} />
    </StyledAlarm>
  );
};

export default React.memo(Alarm);
