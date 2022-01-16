import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import style from './Home.module.css';

export const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <div className={style.home} onClick={goHome}>
      <FontAwesomeIcon icon={faHome}/>
    </div>
  );
};
