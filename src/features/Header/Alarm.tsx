import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTimes } from '@fortawesome/free-solid-svg-icons';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

import FireAlarm from './FireAlarm';
import WaterLeak from './WaterLeak';
import Invasion from './Invasion';
import GasLeak from './GasLeak';

const StyledAlarm = styled.section<{ isOpen: boolean; isAlarm: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;

  & .icons {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 60px;
    margin-top: 5px;
  }
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

      <section className={'icons'}>
        <GasLeak />
        <Invasion />
        <FireAlarm />
        <WaterLeak />
      </section>
    </StyledAlarm>
  );
};

export default React.memo(Alarm);
