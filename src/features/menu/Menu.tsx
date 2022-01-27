import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import MenuButton from './MenuButton';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect( () => {
    setIsOpen( location.pathname === '/Menu' );
  }, [location.pathname]);

  const handleClick = useCallback( () => {
    if(location.pathname === '/Menu') {
      navigate('/');
    } else {
      navigate('/Menu');
    }
  }, [location.pathname]);

  return <MenuButton isOpen={isOpen} onClick={handleClick}/>;
};

export default Menu;
