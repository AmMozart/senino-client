import React from 'react';
import styled from 'styled-components';

import { Controller } from '../controller/Controller';
import Menu from '../menu/Menu';

import { Meteo } from './Meteo';
import Home from './Home';
import DateTime from './DateTime';
import Alarm from './Alarm';

const StyledHeader = styled.header`
  z-index: 3;

  display: grid;
  grid-template-columns: 1fr 6fr 1fr 4fr;
  grid-template-rows: 1fr;
  align-items: center;

  height: 10%;

  background: var(--panel-background-color);
  background: linear-gradient(0deg, #000, rgb(68 68 68));
  border-radius: 100px;
`;

const LeftBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
      <LeftBar>
        <DateTime />
      </LeftBar>
      <CenterBar>
        <Controller />
        <Meteo />
      </CenterBar>
      <RightBar>
        <Alarm />
        <Menu />
      </RightBar>
    </StyledHeader>
  );
};

export default Header;
