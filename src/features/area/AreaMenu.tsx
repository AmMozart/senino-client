import React from 'react';

import style from './AreaMenu.module.css';

interface AreaMenuProps {
  name: string;
  onClick: () => void;
}

const AreaMenu: React.FC<AreaMenuProps> = ({ name, onClick }) => {

  return (
    <div className={style.areaMenu} onClick={onClick}>
      <span>{name}</span>
      <div className="fa fa-caret-down fa-2x"></div>
    </div>
  );
};

export default AreaMenu;
