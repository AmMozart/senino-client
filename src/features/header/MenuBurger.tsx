import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import StyledStatusButton from '../styles/StyledStatusButton';
import ClickAnimation from '../styles/ClickAnimation';

const StyledMenuBurger = styled(StyledStatusButton)`
  color: ${({ isOpen }: MenuProps) => (isOpen ? '#a40019' : '#00a431')};
`;

interface MenuProps {
  isOpen?: boolean;
  onClick: () => void;
}

const MenuBurger: React.FC<MenuProps> = ({ isOpen = false, onClick }) => {
  const component = isOpen ? (
    <FontAwesomeIcon icon={faTimes} />
  ) : (
    <FontAwesomeIcon icon={faBars} />
  );

  return (
    <ClickAnimation>
      <StyledMenuBurger onClick={onClick} isOpen={isOpen}>
        {component}
      </StyledMenuBurger>
    </ClickAnimation>
  );
};

export default React.memo(MenuBurger);
