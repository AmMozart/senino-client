import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import SwitchButton from '../../components/SwitchButton';
import Timer from '../../components/Timer/Timer';
import { addTimer, timers } from '../timer/timerSlice';
import getID from '../../utils/getID';
import TimerMode from '../timer/TimerMode';
import AddTimerButton from '../../components/Timer/AddTimerButton';

import style from './Boiler.module.css';

const Boiler: React.FC = () => {
  const groupName = 'Boiler';
  const dispatch = useAppDispatch();
  const allTimers = useAppSelector(timers);

  const add = () => {
    dispatch(addTimer({
      id: getID(),
      electricGroupName: groupName,
      mode: TimerMode.Off,
      time: {hour: 0, minute: 0},
      weekDays: [],
    }));
  };

  const timerElements = allTimers
    .filter(timer => 
      timer.electricGroupName === groupName)
    .map(timer =>
      <Timer key={timer.id} timer={timer} />);

  return (
    <div className={style.boiler}>

      <h1>Отопительный котел</h1>
      <SwitchButton electricGroupName={groupName} />

      <div className={style.timer}>
        {timerElements}
      </div>

      <AddTimerButton onClick={add}/>

    </div>
  );
};

export default Boiler;
