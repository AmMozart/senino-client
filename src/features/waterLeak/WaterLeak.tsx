import classNames from 'classnames';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

import style from './WaterLeak.module.css';

interface WaterLeakProps {
  value?: boolean;
}

const WaterLeak: React.FunctionComponent<WaterLeakProps> = ({value = false}) => {
  const classes = classNames({
    [style.water]: true,
    [style.normal]: !value,
    [style.problem]: value,
  });
  
  return (
    <div className={classes}>
      <FontAwesomeIcon icon={faTint}/>
    </div>
  );
};

export default React.memo(WaterLeak);
