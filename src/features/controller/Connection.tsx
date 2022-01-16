import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

import style from './Connection.module.css';

interface IConnectionProps {
    isConnect: boolean;
}

export const Connection: React.FunctionComponent<IConnectionProps> = ({ isConnect }) => {

  const statusStyle = classNames({
    [style.connection]: true,
    [style.connect]: isConnect,
    [style.disconnect]: !isConnect,
  });

  return (
    <div className={statusStyle}>
      <FontAwesomeIcon icon={faWifi}/>
    </div>
  );
};
