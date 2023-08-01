import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { UPDATE_METEO_TIME } from '../../config/var';
import Icon from '../meteo/Icon';
import { selectMeteo, updateData } from '../meteo/meteoSlice';
import Temp from '../meteo/Temp';
import ClickAnimation from '../styles/ClickAnimation';
import StyledStatusButton from '../styles/StyledStatusButton';

const StyledMeteoStatusButton = styled(StyledStatusButton)`
  width: 150px;
  font-size: 1.6em;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Meteo: React.FC = () => {
  const dispatch = useAppDispatch();
  const meteo = useAppSelector(selectMeteo);
  const navigate = useNavigate();

  const temperature = meteo.today.temp;
  const iconName = meteo.today.icon;

  useEffect(() => {
    function getMeteoData() {
      dispatch(updateData());
      return getMeteoData;
    }
    const interval = setInterval(getMeteoData(), UPDATE_METEO_TIME);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function openDetails() {
    navigate('/Meteo');
  }

  return (
    <ClickAnimation>
      <StyledMeteoStatusButton onClick={openDetails}>
        <Temp temp={temperature} />
        <Icon name={iconName} />
      </StyledMeteoStatusButton>
    </ClickAnimation>
  );
};