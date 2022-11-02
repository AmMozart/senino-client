import React from 'react';
import styled from 'styled-components';

import { Controller } from '../controller/Controller';
import WaterLeak from './WaterLeak';
import { Meteo } from './Meteo';
import Menu from '../menu/Menu';
import Home from './Home';

const StyledHeader = styled.header`
  height: 10%;
  font-size: 1.8em;
  background: var(--panel-background-color);
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 4fr;
  grid-template-rows: 1fr;
  align-items: center;
  z-index: 1;

  @media (max-width: 576px) {
    font-size: 1.5em;
  }
`;

const LeftBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const CenterBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const RightBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Header: React.FunctionComponent = () => {

  return (
    <StyledHeader>
      <Home />
      <LeftBar />
      <CenterBar>
        <Controller />
        <Meteo />
      </CenterBar>
      <RightBar>
        <WaterLeak />
        <Menu />
      </RightBar>
    </StyledHeader>
  );
};

export default Header;
