import React from 'react';

import { Controller } from '../controller/Controller';
import { Meteo } from '../meteo/Meteo';
import Home from './Home';
import style from './Header.module.css';
import WaterLeak from '../waterLeak/WaterLeak';
import Menu from '../menu/Menu';

export const Header: React.FunctionComponent = () => {

  return (
    <div className={style.header}>
      <div className={style.home}>
        <Home />
      </div>
      <div className={style.left}>
      </div>
      <div className={style.center}>
        <Controller />
        <Meteo />
      </div>
      <div className={style.right}>
        <WaterLeak value={false}/>
        <Menu />
      </div>
    </div>
  );
};
