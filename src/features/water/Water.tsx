import classNames from 'classnames';
import React from 'react';

import style from './Water.module.css';

interface WaterProps {
  value?: boolean;
}

const Water: React.FunctionComponent<WaterProps> = ({value = false}) => {
  const classes = classNames({
    'fa fa-tint': true,
    [style.water]: true,
    [style.normal]: !value,
    [style.problem]: value,
  });
  
  return <div className={classes} aria-hidden="true"></div>;
};

export default React.memo(Water);
