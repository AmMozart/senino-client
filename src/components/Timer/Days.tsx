import React from 'react';
import styled from 'styled-components';

import { addWeekDay, deleteWeekDay } from '../../features/timer/timerSlice';
import WeekDay from '../../features/timer/WeekDay';
import { useAppDispatch } from '../../app/hooks';
import getID from '../../utils/getID';

const StyledDays = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;

const StyledOneDays = styled.div`
  position: relative;
  padding: 3px;

  & label {
    display: flex;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #2b2b2b;
    border-radius: 50%;
    background: var(--btn-back-color);
    color: var(--metallic-color);
    cursor: pointer;
    transition: all 0.3s linear;
  }

  & input {
    position: absolute;
    visibility: hidden;
  }

  & input:checked + label {
    background: rgb(24 141 22);
    color: #fff;
  }

  @media (max-width: 576px) {
    padding: 2.6px;

    & label {
      width: 40px;
      height: 40px;
    }
  }
`;

interface DaysProps {
  days: WeekDay[];
  timerId: number;
}

const Days: React.FC<DaysProps> = ({ days, timerId }) => {
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const dayWeek: WeekDay = event.target.value as WeekDay;

    if (event.target.checked) {
      dispatch(addWeekDay({ day: dayWeek, id: timerId }));
    } else {
      dispatch(deleteWeekDay({ day: dayWeek, id: timerId }));
    }
  };

  const daysElements = Object.values(WeekDay).map((day) => {
    const id = getID();
    const checked = days.includes(day);

    return (
      <StyledOneDays key={id}>
        <input
          type='checkbox'
          checked={checked}
          value={day}
          id={id.toString()}
          onChange={handleChange}
        />
        <label htmlFor={id.toString()}>{day}</label>
      </StyledOneDays>
    );
  });

  return <StyledDays>{daysElements}</StyledDays>;
};

export default Days;
