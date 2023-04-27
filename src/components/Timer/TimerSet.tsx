import React from 'react';

import styled from 'styled-components';

import { useAppSelector } from '../../app/hooks';
import Timer from '../../components/Timer/Timer';
import { timers } from '../../features/timer/timerSlice';

const StyledTimerSet = styled(React.Fragment)`
  overflow-y: scroll;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  height: 85%;
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
