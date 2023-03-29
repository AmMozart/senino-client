import React from 'react';

import { MeteoData } from './meteoSlice';
import SkyInfo from './SkyInfo';
import Info from './Info';
import styled from 'styled-components';

const StyledOneDayWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 25%;
  height: 85%;
  margin: 0 auto;

  & .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    box-sizing: border-box;
    width: 100%;
    height: 100%;

    background: linear-gradient(to bottom, #414141 10%, rgb(0 0 0 / 0%) 100%);
    border: 1px solid #000;
    border-radius: 30px;
  }

  & .title {
    margin: 0;
    padding: 0;
  }

  .shadow {
    box-sizing: border-box;
    width: 100%;
    height: 6%;
    margin: 8px 0;

    background: linear-gradient(to bottom, #2a2a2a 10%, rgb(0 0 0 / 0%) 60%);
    border-top: 3px solid var(--btn-border-color-active);
    border-radius: 30px;
  }

  @media (max-width: 576px) {
    width: 90%;
    height: 33%;

    & .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      height: 70%;

      border: 1px solid rgb(117 117 117);
    }

    & .title {
      margin: auto;
      font-size: 1em;
    }

    & .date {
      display: none;
    }

    & .shadow {
      display: none;
    }
  }

  @media (max-width: 765px) {
    & .title {
      font-size: 1em;
    }
  }
`;

interface OneDayWeatherProps {
  title: string;
  meteoData: MeteoData;
}

const OneDayWeather: React.FC<OneDayWeatherProps> = ({ title, meteoData }) => {
  const { temp, humidity, pressure, wind, icon, date } = meteoData;

  return (
    <StyledOneDayWeather>
      <div className={'info'}>
        <h2 className={'title'}>{title}</h2>
        <span className={'date'}>{date}</span>
        <SkyInfo sky={icon} />
        <Info
          temp={temp}
          humidity={humidity}
          pressure={pressure}
          windSpeed={wind}
        />
      </div>
      <div className={'shadow'}></div>
    </StyledOneDayWeather>
  );
};

export default OneDayWeather;
