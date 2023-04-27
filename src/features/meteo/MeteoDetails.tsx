import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { selectMeteo } from './meteoSlice';

import OneDayWeather from './OneDayWeather';

import { useAppSelector } from '../../app/hooks';
import StyledPage from '../styles/StyledPage';

const StyledMeteoDetails = styled(StyledPage)<{ animate: boolean }>`
  position: relative;
  left: ${({ animate }) => (animate ? '0px' : '-100%')};
  flex-direction: row;
  transition: all 0.3s ease-in-out;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

function MeteoDetails(): JSX.Element {
  const meteo = useAppSelector(selectMeteo);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <StyledMeteoDetails animate={animate}>
      <OneDayWeather title='Сегодня' meteoData={meteo.today} />
      <OneDayWeather title='Завтра' meteoData={meteo.tomorrow} />
      <OneDayWeather title='Послезавтра' meteoData={meteo.dayAfterTomorrow} />
    </StyledMeteoDetails>
  );
}

export default MeteoDetails;
