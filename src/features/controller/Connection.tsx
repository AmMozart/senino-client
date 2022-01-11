import React from 'react';
import classNames from 'classnames';

import style from './Connection.module.css';

interface IConnectionProps {
    isConnect: boolean;
}

export const Connection: React.FunctionComponent<IConnectionProps> = ({ isConnect }) => {

  const statusStyle = classNames({
    'fa fa-wifi': true,
    [style.connection]: true,
    [style.connect]: isConnect,
    [style.disconnect]: !isConnect,
  });

  return <div className={statusStyle}></div>;
};
