import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuButton from './MenuButton';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback( () => {
    setOpen(!open);
    toggleMenu();
  }, [open]);

  const toggleMenu = () => {
    navigate(!open ? '/Menu' : '/');
  };

  return (
    <MenuButton isOpen={open} onClick={handleClick}/>
  );
};

export default Menu;
