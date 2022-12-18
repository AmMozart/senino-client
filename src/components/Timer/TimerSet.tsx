import React from 'react';

import { timers } from '../../features/timer/timerSlice';
import { useAppSelector } from '../../app/hooks';
import Timer from '../../components/Timer/Timer';
import styled from 'styled-components';

const StyledTimerSet = styled(React.Fragment)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 85%;
  overflow-y: scroll;
`;

interface PropsTimerSet {
  groupName: string;
}

const TimerSet: React.FC<PropsTimerSet> = ({ groupName }) => {
  const allTimers = useAppSelector(timers);

  const timerElements = allTimers
    .filter((timer) => timer.electricGroupName === groupName)
    .map((timer) => <Timer key={timer.id} timer={timer} />);

  return <StyledTimerSet>{timerElements}</StyledTimerSet>;
};

export default TimerSet;
