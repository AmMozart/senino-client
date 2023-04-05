import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import StyledStatusButton from '../styles/StyledStatusButton';
import ClickAnimation from '../styles/ClickAnimation';

const StyledMenuBurger = styled(StyledStatusButton)`
  font-size: 1.4em;
  color: ${({ isOpen }: MenuProps) => (isOpen ? '#a40019' : '#00a431')};
`;

interface MenuProps {
  isOpen?: boolean;
  onClick: () => void;
}

const MenuBurger: React.FC<MenuProps> = ({ isOpen = false, onClick }) => {
  const icon = isOpen ? faTimes : faBars;

  return (
    <ClickAnimation>
      <StyledMenuBurger onClick={onClick} isOpen={isOpen}>
        <FontAwesomeIcon icon={icon} />
      </StyledMenuBurger>
    </ClickAnimation>
  );
};

export default React.memo(MenuBurger);
