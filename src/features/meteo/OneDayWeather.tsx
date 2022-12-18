import React from 'react';

import { MeteoData } from './meteoSlice';
import SkyInfo from './SkyInfo';
import Info from './Info';
import style from './OneDayWeather.module.css';

interface OneDayWeatherProps {
  title: string;
  meteoData: MeteoData;
}

const OneDayWeather: React.FC<OneDayWeatherProps> = ({ title, meteoData }) => {
  const { temp, humidity, pressure, wind, icon, date } = meteoData;

  return (
    <div className={style.oneDayWeather}>
      <div className={style.info}>
        <h2 className={style.title}>{title}</h2>
        <span className={style.date}>{date}</span>
        <SkyInfo sky={icon} />
        <Info
          temp={temp}
          humidity={humidity}
          pressure={pressure}
          windSpeed={wind}
        />
      </div>
      <div className={style.shadow}></div>
    </div>
  );
};

export default OneDayWeather;
