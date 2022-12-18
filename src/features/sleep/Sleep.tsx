import React, { useEffect, useRef } from 'react';
import { TIME_SLEEP_MODE_MS } from '../../config/var';
import { useNavigate } from 'react-router-dom';

const Sleep: React.FC = () => {
  const navigate = useNavigate();
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const callback = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      navigate('/Video');
    }, TIME_SLEEP_MODE_MS);
  };

  useEffect(() => {
    callback();
    window.addEventListener('click', callback);

    return () => {
      window.removeEventListener('click', callback);
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return null;
};

export default Sleep;
