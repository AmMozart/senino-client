import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import MenuBurger from '../Header/MenuBurger';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(location.pathname === '/Menu');
  }, [location.pathname]);

  const handleClick = useCallback(() => {
    if (location.pathname === '/Menu') {
      navigate('/');
    } else {
      navigate('/Menu');
    }
  }, [location.pathname]);

  return <MenuBurger isOpen={isOpen} onClick={handleClick} />;
};

export default Menu;
