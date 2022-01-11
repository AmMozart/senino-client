import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.css';

export const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  const classes = style.home + ' fa fa-home';

  return <div className={classes} aria-hidden="true" onClick={goHome}></div>;
};
