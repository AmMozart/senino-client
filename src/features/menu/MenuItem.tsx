import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch } from '../../app/hooks';
import { changeMenuItem } from './menuSlice';
import { useNavigate } from 'react-router-dom';
import MenuItemName from './MenuItemName';

const StyledMenuList = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 95%;
  height: 100px;
  margin: 10px;
  padding: 10px;

  font-size: 1.2em;
  font-weight: bold;
  color: var(--btn-text-color);

  background: var(--menu-item-btn-background-color);
  border-radius: 20px;
  box-shadow: var(--menu-item-box-shadow);

  transition: all 0.3s linear;

  & .icon {
    font-size: 40px;
  }
`;

interface MenuItemProps {
  name: string;
  faIcon: IconDefinition;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, faIcon }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const menuItem = Object.keys(MenuItemName).filter(
      (x) => (MenuItemName as any)[x] == name
    )[0];
    dispatch(changeMenuItem(menuItem));

    navigate(`/${menuItem}`);
  };

  return (
    <StyledMenuList onClick={handleClick}>
      <FontAwesomeIcon className='icon' icon={faIcon} />
      <label>{name}</label>
    </StyledMenuList>
  );
};

export default MenuItem;
