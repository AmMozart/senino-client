import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTimeString } from '../../utils/getTimeString';
import { getDateString } from '../../utils/getDateString';
import { getDayString } from '../../utils/getDayString';

const StyledDateTime = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70px;
  font-size: 12px;
  font-family: 'Times New Roman', Times, serif;
  color: #898989;
  text-shadow: rgb(0 0 0) 0 2px 0;
  letter-spacing: 1px;

  & .time {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 2px;
    word-spacing: 0.08em;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const DateTime: React.FC = () => {
  const initDate = new Date();

  const [time, setTime] = useState(getTimeString(initDate));
  const [date, setDate] = useState(getDateString(initDate));
  const [day, setDay] = useState(getDayString(initDate));

  const ONE_SEC = 1000;

  useEffect(() => {
    let visibleSeparator = false;

    const id = setInterval(() => {
      const currentDate = new Date();

      setTime(getTimeString(currentDate, visibleSeparator ? ':' : ' '));
      setDate(getDateString(currentDate));
      setDay(getDayString(currentDate));

      visibleSeparator = !visibleSeparator;
    }, ONE_SEC);

    return () => clearInterval(id);
  }, []);

  return (
    <StyledDateTime data-testid={'date-time'}>
      <span className='time'>{time}</span>
      <span className='day'>{day}</span>
      <span className='date'>{date}</span>
    </StyledDateTime>
  );
};

export default DateTime;
