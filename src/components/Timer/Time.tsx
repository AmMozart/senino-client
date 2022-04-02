import React from 'react';

import getID from '../../utils/getID';
import style from './Time.module.css';

const Time: React.FC = () => {
  const id = getID();

  return (
    <div className={style.time}>
      <label htmlFor={id.toString()}>Время:</label>
      <input type='time' id={id.toString()} required />
    </div>
  );
};

export default Time;
