import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import SwitchButton from '../../components/SwitchButton';
import AddTimerButton from '../../components/Timer/AddTimerButton';
import { addTimer, timers } from '../timer/timerSlice';
import Timer from '../../components/Timer/Timer';
import getID from '../../utils/getID';
import TimerMode from '../timer/TimerMode';

import style from './water.module.css';

const Water: React.FC = () => {
  const groupName = 'HotWater';
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
    <div className={style.water}>
      
      <h1>Вода</h1>
      <SwitchButton electricGroupName={groupName}/>
    
      <div className={style.timer}>
        {timerElements}
      </div>

      <AddTimerButton onClick={add}/>
    </div>
  );
};

export default Water;
