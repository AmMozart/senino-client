import React from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '../../app/hooks';
import { Time as TimeType, setTime } from '../../features/timer/timerSlice';
import getID from '../../utils/getID';

const StyledTime = styled.div`
  & label {
    font: 1.5em italic sans-serif;
  }

  & input {
    padding: 0 10px;
    font: 2em italic sans-serif;
    color: var(--btn-text-color);
    background: #0000;
  }

  & input[type='time']::-webkit-calendar-picker-indicator {
    display: block;

    width: 60px;
    height: 60px;

    opacity: 1;
    border-width: thin;
  }

  @media (max-width: 576px) {
    & input {
      font-size: 1.2em;
    }
  }
`;

interface TimeProps {
  time: TimeType;
  timerId: number;
}

const Time: React.FC<TimeProps> = ({ time, timerId }) => {
  const dispatch = useAppDispatch();
  const id = getID();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    if (event.currentTarget.value.length > 2) {
      const arr = event.currentTarget.value.split(':');
      const hour = Number(arr[0]);
      const minute = Number(arr[1]);

      dispatch(setTime({ id: timerId, time: { hour, minute } }));
    }
  };

  const formatedHour = time.hour.toString().padStart(2, '0');
  const formatedMinute = time.minute.toString().padStart(2, '0');

  return (
    <StyledTime>
      <input
        value={`${formatedHour}:${formatedMinute}`}
        type='time'
        id={id.toString()}
        required
        onChange={handleChange}
      />
    </StyledTime>
  );
};

export default Time;
