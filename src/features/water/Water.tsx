import React from 'react';

import on from '../../img/w1.svg';
import off from '../../img/w1.svg';
import style from './Water.module.css';

interface WaterProps {
  value: boolean;
}

const Water: React.FunctionComponent<WaterProps> = ({value}) => (
  <div className={style.toggle}>
    <div className={style.control}>
      <img className={`${style.size}`} src={value ? on : off} alt="Индикатор" />
    </div>
    <div className={style.name}>name</div>
  </div>
);

export default React.memo(Water);
