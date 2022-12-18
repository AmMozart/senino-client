import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import SwitchButton from '../../components/SwitchButton';
import { addTimer } from '../timer/timerSlice';
import getID from '../../utils/getID';
import TimerMode from '../timer/TimerMode';
import StyledButton from '../styles/StyledButton';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';
import TimerSet from '../../components/Timer/TimerSet';
import StyledContent from '../styles/StyledContent';

const Water: React.FC = () => {
  const groupName = 'HotWater';
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
      <StyledTitle>Вода</StyledTitle>
      <StyledContent>
        <SwitchButton electricGroupName={groupName} />
        <TimerSet groupName={groupName} />
      </StyledContent>
      <StyledButton onClick={add}>Добавить Таймер</StyledButton>
    </StyledPage>
  );
};

export default Water;
