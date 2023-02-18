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
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #fff;
    border-radius: 30px;
    background: linear-gradient(to bottom, #414141 10%, rgb(0 0 0 / 0%) 100%);
  }

  & .title {
    padding: 0;
    margin: 0;
  }

  .shadow {
    width: 100%;
    height: 6%;
    box-sizing: border-box;
    border-radius: 30px;
    border-top: 3px solid var(--btn-border-color-active);
    margin: 8px 0;
    background: linear-gradient(to bottom, #2a2a2a 10%, rgb(0 0 0 / 0%) 60%);
  }

  @media (max-width: 576px) {
    width: 90%;
    height: 33%;

    & .info {
      display: flex;
      height: 70%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
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
