import React from 'react';

import style from './Temp.module.css';

interface TempProps {
  temp: number;
}

const Temp: React.FC<TempProps> = ({ temp }) => {
  return <span className={style.temp}>{temp}&deg;C</span>;
};

export default React.memo(Temp);
