import {
  faCamera,
  faFaucet,
  faThermometerEmpty,
  faCogs,
  faShower,
  faBatteryHalf,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import MenuItemName from './MenuItemName';

import StyledPage from '../styles/StyledPage';

const StyledMenuList = styled(StyledPage)`
  position: relative;
  left: ${(props: { animate: boolean }) => (props.animate ? '0px' : '-100%')};

  overflow-y: auto;
  justify-content: space-between;

  height: 90%;

  transition: all 0.3s ease-in-out;

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
      <MenuItem name={MenuItemName.Boiler} faIcon={faShower} />
      <MenuItem name={MenuItemName.Water} faIcon={faFaucet} />
      <MenuItem name={MenuItemName.Climate} faIcon={faThermometerEmpty} />
      <MenuItem name={MenuItemName.Septic} faIcon={faBatteryHalf} />
      <MenuItem name={MenuItemName.Settings} faIcon={faCogs} />
    </StyledMenuList>
  );
};

export default MenuList;
