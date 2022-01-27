import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import style from './Menu.module.css';

interface MenuProps {
  isOpen?: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuProps> = ({isOpen = false, onClick}) => {

  const component = isOpen
    ? <FontAwesomeIcon icon={faTimes}/>
    : <FontAwesomeIcon icon={faBars}/>;

  return (
    <div className={style.menu} onClick={onClick}>
      {component}
    </div>
  );
};

export default React.memo(MenuButton);
