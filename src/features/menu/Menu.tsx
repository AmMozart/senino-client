import React from 'react';
import classNames from 'classnames';

import style from './Menu.module.css';

const Menu: React.FC = () => {
  const classes = classNames({
    'fa fa-bars': true,
    [style.menu]: true,
  });

  return (
    <i className={classes}></i>
  );
};

export default Menu;
