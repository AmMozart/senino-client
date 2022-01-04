import React from 'react';

import { Controller } from '../controller/Controller';
import { Meteo } from '../meteo/Meteo';
import { Home } from './Home';
import style from './Header.module.css';

export const Header: React.FunctionComponent = () => {

  return (
    <div className={style.header}>
      <div className={style.home}>
        <Home />
      </div>
      <div className={style.left}>
        {/* <div className="fa fa-bolt fa-2x" aria-hidden="true"></div>
        <div className="fa fa-bell fa-2x" aria-hidden="true"></div>
        <div className="fa fa-cube fa-2x" aria-hidden="true"></div>
        <div className="fa fa-unlock fa-2x" aria-hidden="true"></div> */}
      </div>
      <div className={style.center}>
        {/* <Connection isConnect={true}/> */}
        <Controller />
        <Meteo />
      </div>
      <div className={style.right}>
        <div className="fa fa-tint" aria-hidden="true"></div>
        {/* <div className="fa fa-lock fa-2x" aria-hidden="true"></div> */}
      </div>
    </div>
  );
};
