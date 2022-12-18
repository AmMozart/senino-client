import React from 'react';

import tempIco from './img/temp.png';
import humIco from './img/hum.png';
import presIco from './img/pres.png';
import windIco from './img/wind.png';
import style from './Info.module.css';

interface InfoProps {
  temp: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
}

const Info: React.FC<InfoProps> = ({ temp, humidity, pressure, windSpeed }) => {
  return (
    <div className={style.info}>
      <p>
        <img className={style.icon} src={tempIco} alt='темп.' />{' '}
        <span className={style.temp}>{temp} &deg;C </span>
      </p>
      <p>
        <img className={style.icon} src={humIco} alt='влаж.' />{' '}
        <span>{humidity} %</span>
      </p>
      <p>
        <img className={style.icon} src={presIco} alt='давл.' />{' '}
        <span>{pressure} мм.</span>
      </p>
      <p>
        <img className={style.icon} src={windIco} alt='ветер' />{' '}
        <span>{windSpeed} м/с</span>
      </p>
    </div>
  );
};

export default Info;
