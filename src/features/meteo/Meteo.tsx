import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMeteo, updateData } from './meteoSlice';
import Temp from './Temp';
import Icon from './Icon';
import { UPDATE_METEO_TIME } from '../../config/var';

import style from './Meteo.module.css';

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
    <div className={style.meteo} onClick={openDetails}>
      <Temp temp={temperature}/>
      <Icon name={iconName}/>
    </div >
  );
};
