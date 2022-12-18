import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { selectMeteo } from './meteoSlice';
import OneDayWeather from './OneDayWeather';
import style from './MeteoDetails.module.css';

function MeteoDetails(): JSX.Element {
  const meteo = useAppSelector(selectMeteo);

  return (
    <div className={style.meteoDetails}>
      <OneDayWeather title='Сегодня' meteoData={meteo.today} />
      <OneDayWeather title='Завтра' meteoData={meteo.tomorrow} />
      <OneDayWeather title='Послезавтра' meteoData={meteo.dayAfterTomorrow} />
    </div>
  );
}

export default MeteoDetails;
