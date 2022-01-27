import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { changeMenuItem } from './menuSlice';
import { useAppDispatch } from '../../app/hooks';
import style from './MenuItem.module.css';
import { useNavigate } from 'react-router-dom';
import MenuItemName from './MenuItemName';

interface MenuItemProps {
  name: string;
  faIcon: IconDefinition;
}

const MenuItem: React.FC<MenuItemProps> = ({name, faIcon}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const menuItem = Object.keys(MenuItemName).filter((x) => (MenuItemName as any)[x] == name)[0];
    dispatch(changeMenuItem(menuItem));
    
    navigate(`/${menuItem}`);
  };

  return (
    <div className={style.menuItem} onClick={handleClick}>
      <FontAwesomeIcon className={style.icon} icon={faIcon}/>
      <label>{name}</label>
    </div>
  );
};

export default MenuItem;
