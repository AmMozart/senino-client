import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faCamera,
  faFaucet,
  faThermometerEmpty,
  faCogs,
  faShower, 
  faBatteryHalf} from '@fortawesome/free-solid-svg-icons';

import MenuItem from './MenuItem';
import MenuItemName from './MenuItemName';
import StyledPage from '../styles/StyledPage';

const StyledMenuList = styled(StyledPage)`
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  position: relative;
  left: ${(props: {animate: boolean}) => props.animate ? '0px' : '-100%'};
  height: 90%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const MenuList: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <StyledMenuList animate={animate}>
      <MenuItem name={MenuItemName.Video} faIcon={faCamera} />
      <MenuItem name={MenuItemName.Boiler} faIcon={faShower}/>
      <MenuItem name={MenuItemName.Water} faIcon={faFaucet}/>
      <MenuItem name={MenuItemName.Climate} faIcon={faThermometerEmpty}/>
      <MenuItem name={MenuItemName.Septic} faIcon={faBatteryHalf}/>
      <MenuItem name={MenuItemName.Settings} faIcon={faCogs}/>
    </StyledMenuList>
  );
};

export default MenuList;
