import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addWeekDay, deleteWeekDay } from '../../features/timer/timerSlice';
import WeekDay from '../../features/timer/WeekDay';

import getID from '../../utils/getID';
import style from './Days.module.css';

interface DaysProps {
  days: WeekDay[];
  timerId: number;
}

const Days: React.FC<DaysProps> = ({days, timerId}) => {
  const dispatch = useAppDispatch();
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const dayWeek: WeekDay = event.target.value as WeekDay;

    if(event.target.checked) {
      dispatch(addWeekDay({day: dayWeek, id: timerId}));
    }
    else {
      dispatch(deleteWeekDay({day: dayWeek, id: timerId}));
    }
  };

  return (
    <div className={style.days}>

      {Object.values(WeekDay).map(day => {
        const id = getID();
        const checked = days.includes(day);
        
        return (
          <div key={id} className={style.oneDay}>
            <input type='checkbox' checked={checked} value={day} id={id.toString()} className={style.input} onChange={handleChange}/>
            <label htmlFor={id.toString()} className={style.label}>{day}</label>
          </div>
        );}

      )}
    </div>
  );
};

export default Days;
