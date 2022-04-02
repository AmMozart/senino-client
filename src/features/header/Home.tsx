import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.css';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className={style.home} onClick={goHome}>
      <FontAwesomeIcon icon={faHome}/>
    </div>
  );
};

export default Home;
