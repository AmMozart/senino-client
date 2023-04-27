import React from 'react';
import styled from 'styled-components';

import humIco from './img/hum.png';
import presIco from './img/pres.png';
import tempIco from './img/temp.png';
import windIco from './img/wind.png';

const StyledInfo = styled.div`
  & p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .icon {
    width: 25%;
  }

  @media (max-width: 576px) {
    & span {
      display: none;
    }

    & .icon {
      display: none;
    }

    & .temp {
      display: inline-block;
      margin: 0 30px;
      color: var(--btn-text-color);
    }
  }
`;

interface InfoProps {
  temp: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
}

const Info: React.FC<InfoProps> = ({ temp, humidity, pressure, windSpeed }) => {
  return (
    <StyledInfo>
      <p>
        <img className={'icon'} src={tempIco} alt='темп.' />
        <span className={'temp'}>{temp}&deg;C</span>
      </p>
      <p>
        <img className={'icon'} src={humIco} alt='влаж.' />
        <span>{humidity}%</span>
      </p>
      <p>
        <img className={'icon'} src={presIco} alt='давл.' />
        <span>{pressure}мм.</span>
      </p>
      <p>
        <img className={'icon'} src={windIco} alt='ветер' />
        <span>{windSpeed}м/с</span>
      </p>
    </StyledInfo>
  );
};

export default Info;
