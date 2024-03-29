import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import SwitchButton from '../../components/SwitchButton';
import TimerSet from '../../components/Timer/TimerSet';
import StyledButton from '../styles/StyledButton';
import StyledContent from '../styles/StyledContent';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';
import TimerMode from '../timer/TimerMode';
import { addTimer } from '../timer/timerSlice';

const Water: React.FC = () => {
  const groupName = 'HotWater';
  const dispatch = useAppDispatch();

  const add = () => {
    dispatch(
      addTimer({
        id: 0,
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
        <SwitchButton title={'Бойлер'} electricGroupName={groupName} />
        <TimerSet groupName={groupName} />
      </StyledContent>
      <StyledButton onClick={add}>Добавить Таймер</StyledButton>
    </StyledPage>
  );
};

export default Water;
