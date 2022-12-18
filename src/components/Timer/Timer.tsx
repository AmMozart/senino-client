import React from 'react';
import styled from 'styled-components';

import {
  deleteTimer,
  Timer as TimerState,
} from '../../features/timer/timerSlice';
import { useAppDispatch } from '../../app/hooks';
import Days from './Days';
import Time from './Time';
import Mode from './Mode';

const StyledTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  background: var(--panel-background-color);
  border-radius: 15px;
  padding: 10px;
  transition: all 0.3s linear;

  @media (max-width: 576px) {
    flex-flow: wrap-reverse;
    justify-content: right;
    gap: 20px;
  }
`;

const StyledClose = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  &:before,
  &:after {
    position: absolute;
    left: 20px;
    content: ' ';
    height: 40px;
    width: 3px;
    background-color: #a71616;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

interface TimerProps {
  timer: TimerState;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  const dispatch = useAppDispatch();

  const closeTimer = () => {
    dispatch(deleteTimer(timer.id));
  };

  return (
    <>
      <StyledTimer>
        <Time time={timer.time} timerId={timer.id} />
        <Mode mode={timer.mode} timerId={timer.id} />
        <Days days={timer.weekDays} timerId={timer.id} />
        <StyledClose onClick={closeTimer}></StyledClose>
      </StyledTimer>
    </>
  );
};

export default Timer;
