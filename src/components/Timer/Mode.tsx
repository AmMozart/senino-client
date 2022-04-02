import React from 'react';

import style from './Mode.module.css';

const Mode: React.FC = () => {

  return (
    <div className={style.mode}>
      Режим:
      <span>Вкл</span>
      <span>Выкл</span>
    </div>
  );
};

export default Mode;
