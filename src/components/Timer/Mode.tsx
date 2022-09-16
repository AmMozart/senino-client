import React from 'react';
import classNames from 'classnames';

import TimerMode from '../../features/timer/TimerMode';
import { setMode } from '../../features/timer/timerSlice';

import style from './Mode.module.css';
import { useAppDispatch } from '../../app/hooks';

interface ModeProps {
  mode: TimerMode;
  timerId: number;
}

const Mode: React.FC<ModeProps> = ({mode, timerId}) => {
  const dispatch = useAppDispatch();
  
  const handleChange: React.MouseEventHandler<HTMLElement>  = (event) => {
    const newMode = event.currentTarget.textContent === 'Вкл' ? TimerMode.On : TimerMode.Off;
    dispatch(setMode({id: timerId, mode: newMode}));
  };
  
  const styleOn = classNames({
    [style.selectButton]: mode === TimerMode.On
  });

  const styleOff = classNames({
    [style.selectButton]: mode === TimerMode.Off
  });

  return (
    <div className={style.mode}>
      Режим:
      <span className={styleOn} onClick={handleChange}>Вкл</span>
      <span className={styleOff} onClick={handleChange}>Выкл</span>
    </div>
  );
};

export default Mode;
