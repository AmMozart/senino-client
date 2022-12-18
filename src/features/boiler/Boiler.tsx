import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import SwitchButton from '../../components/SwitchButton';
import getID from '../../utils/getID';
import { addTimer } from '../timer/timerSlice';
import TimerMode from '../timer/TimerMode';
import StyledPage from '../styles/StyledPage';

import TimerSet from '../../components/Timer/TimerSet';
import StyledTitle from '../styles/StyledTitle';
import StyledContent from '../styles/StyledContent';
import StyledButton from '../styles/StyledButton';

const Boiler: React.FC = () => {
  const groupName = 'Boiler';
  const dispatch = useAppDispatch();

  const add = () => {
    dispatch(
      addTimer({
        id: getID(),
        electricGroupName: groupName,
        mode: TimerMode.Off,
        time: { hour: 0, minute: 0 },
        weekDays: [],
      })
    );
  };

  return (
    <StyledPage>
      <StyledTitle>Отопительный котел</StyledTitle>
      <StyledContent>
        <SwitchButton electricGroupName={groupName} />
        <TimerSet groupName={groupName} />
      </StyledContent>
      <StyledButton onClick={add}>Добавить Таймер</StyledButton>
    </StyledPage>
  );
};

export default Boiler;
