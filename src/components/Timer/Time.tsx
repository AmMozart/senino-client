import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Time as TimeType, setTime } from '../../features/timer/timerSlice';

import getID from '../../utils/getID';
import style from './Time.module.css';

interface TimeProps {
  time: TimeType;
  timerId: number;
}

const Time: React.FC<TimeProps> = ({time, timerId}) => {
  const dispatch = useAppDispatch();
  const id = getID();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
    if (event.currentTarget.value.length > 2) {
      const arr = event.currentTarget.value.split(':');
      const hour = Number(arr[0]);
      const minute = Number(arr[1]);
      
      dispatch(setTime({id: timerId, time: {hour, minute}}));
    }
  };

  const formatedHour = time.hour.toString().padStart(2, '0');
  const formatedMinute = time.minute.toString().padStart(2, '0');

  return (
    <div className={style.time}>
      <label htmlFor={id.toString()}>Время:</label>
      <input value={`${formatedHour}:${formatedMinute}`} type='time' id={id.toString()} required onChange={handleChange}/>
    </div>
  );
};

export default Time;
