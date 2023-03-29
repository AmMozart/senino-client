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

  font-size: 1em;

  border-radius: 25px;
  color: #fff;
  padding: 10px 30px;
  transition: background-color 0.3s ease-in-out;

  box-shadow: rgb(57 57 57) 0 1px;
  border: 1px solid rgb(0 0 0);
  background-image: linear-gradient(rgb(65 65 65) 10%, rgb(0 0 0 / 0%) 100%);

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
      <span>{name}</span>
    </StyledMenuList>
  );
};

export default MenuItem;
