import React from 'react';
import SwitchButton from '../../components/SwitchButton';

import style from './Septic.module.css';

const Septic: React.FC = () => {

  return (
    <div className={style.septic}>
      <h1>Септик</h1>
      <SwitchButton electricGroupName='Septik'/>
    </div>
  );
};

export default Septic;
