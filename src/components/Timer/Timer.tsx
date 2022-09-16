import React from 'react';

import style from './Timer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import Days from './Days';
import Time from './Time';
import Mode from './Mode';
import { deleteTimer, Timer as TimerState } from '../../features/timer/timerSlice';
import { useAppDispatch } from '../../app/hooks';

interface TimerProps {
  timer: TimerState;
}

const Timer: React.FC<TimerProps> = ({timer}) => {
  const dispatch = useAppDispatch();

  const closeTimer = () => {
    dispatch(deleteTimer(timer.id));
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.timer}>
          <h2>Таймер</h2>
          <Time time={timer.time} timerId={timer.id}/>
          <Mode mode={timer.mode} timerId={timer.id}/>
          <Days days={timer.weekDays} timerId={timer.id}/>
          <FontAwesomeIcon className={style.timerIcon} icon={faStopwatch}/>
        </div>
        <div className={style.close} onClick={closeTimer}></div>
      </div>
    </>
  );
};

export default Timer;
