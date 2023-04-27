import React from 'react';
import styled from 'styled-components';

import FireAlarm from './FireAlarm';
import GasLeak from './GasLeak';
import Invasion from './Invasion';
import WaterLeak from './WaterLeak';

const StyledAlarmIcons = styled.section<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '60px' : '-270px')};
  margin-top: 5px;
  transition: top 0.3s ease-in;
`;

interface AlarmIconsProps {
  isOpen: boolean;
}

const AlarmIcons: React.FC<AlarmIconsProps> = ({ isOpen }) => {
  return (
    <StyledAlarmIcons isOpen={isOpen}>
      <GasLeak />
      <Invasion />
      <FireAlarm />
      <WaterLeak />
    </StyledAlarmIcons>
  );
};

export default React.memo(AlarmIcons);
