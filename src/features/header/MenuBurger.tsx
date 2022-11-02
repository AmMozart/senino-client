import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import StyledStatusButton from '../styles/StyledStatusButton';
import ClickAnimation from '../styles/ClickAnimation';


interface MenuProps {
  isOpen?: boolean;
  onClick: () => void;
}

const MenuBurger: React.FC<MenuProps> = ({isOpen = false, onClick}) => {
  const component = isOpen
    ? <FontAwesomeIcon icon={faTimes}/>
    : <FontAwesomeIcon icon={faBars}/>;

  return (
    <StyledStatusButton>
      <ClickAnimation>
        <div onClick={onClick}>
          {component}
        </div>
      </ClickAnimation>
    </StyledStatusButton>
  );
};

export default React.memo(MenuBurger);
