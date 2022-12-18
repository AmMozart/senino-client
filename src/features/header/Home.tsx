import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import StyledStatusButton from '../styles/StyledStatusButton';
import ClickAnimation from '../styles/ClickAnimation';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <StyledStatusButton>
      <ClickAnimation>
        <div onClick={goHome}>
          <FontAwesomeIcon icon={faHome} />
        </div>
      </ClickAnimation>
    </StyledStatusButton>
  );
};

export default Home;
