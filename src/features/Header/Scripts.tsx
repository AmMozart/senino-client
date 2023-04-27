import { faStarOfLife, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

import Scripts from '../script/Scripts';
import StyledStatusButton from '../styles/StyledStatusButton';

const StyledScripts = styled.section<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledButtonScripts = styled(StyledStatusButton)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2em;

  & span {
    font-size: 10px;
  }
`;

const HomeScripts: React.FC = () => {
  const [show, setShow] = useState(false);

  const toggleIcon = () => {
    setShow((prev) => !prev);
  };

  const icon = show ? faTimes : faStarOfLife;

  return (
    <StyledScripts isOpen={show}>
      <StyledButtonScripts onClick={toggleIcon}>
        <FontAwesomeIcon icon={icon} />
        <span>Режим</span>
      </StyledButtonScripts>

      <Scripts isOpen={show} />
    </StyledScripts>
  );
};

export default React.memo(HomeScripts);
