import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return <div className="fa fa-home" aria-hidden="true" onClick={goHome}></div>;
};
