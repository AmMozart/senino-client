import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { changeMenuItem } from './menuSlice';
import { useAppDispatch } from '../../app/hooks';
import style from './MenuItem.module.css';

interface MenuItemProps {
  name: string;
  faIcon: IconDefinition;
}

const MenuItem: React.FC<MenuItemProps> = ({name, faIcon}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(changeMenuItem(name));

  return (
    <div className={style.menuItem} onClick={handleClick}>
      <FontAwesomeIcon className={style.icon} icon={faIcon}/>
      <label>{name}</label>
    </div>
  );
};

export default MenuItem;
