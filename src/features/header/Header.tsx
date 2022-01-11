import React from 'react';

import { Controller } from '../controller/Controller';
import { Meteo } from '../meteo/Meteo';
import { Home } from './Home';
import style from './Header.module.css';
import Water from '../water/Water';
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
        <Water value={false}/>
        <Menu />
      </div>
    </div>
  );
};
