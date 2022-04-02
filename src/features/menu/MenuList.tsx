import React from 'react';
import { faCamera,
  faFaucet,
  faThermometerEmpty,
  faCogs,
  faShower, 
  faBatteryHalf} from '@fortawesome/free-solid-svg-icons';

import MenuItem from './MenuItem';
import style from './MenuList.module.css';
import MenuItemName from './MenuItemName';

const MenuList: React.FC = () => {

  return (
    <div className={style.menuList}>
      <MenuItem name={MenuItemName.Video} faIcon={faCamera} />
      <MenuItem name={MenuItemName.Boiler} faIcon={faShower}/>
      <MenuItem name={MenuItemName.Water} faIcon={faFaucet}/>
      <MenuItem name={MenuItemName.Climate} faIcon={faThermometerEmpty}/>
      <MenuItem name={MenuItemName.Septic} faIcon={faBatteryHalf}/>
      <MenuItem name={MenuItemName.Settings} faIcon={faCogs}/>
    </div>
  );
};

export default MenuList;
