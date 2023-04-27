import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Boiler from '../Boiler';
import Connect from '../Connect';
import { ControlPanel } from '../controlPanel/ControlPanel';
import Header from '../Header';
import MenuList from '../menu/MenuList';
import MeteoDetails from '../meteo/MeteoDetails';
import Septic from '../Septic';
import Settings from '../settings/Settings';
import Sip from '../sip/Sip';
import Video from '../video/Video';
import Water from '../Water';

const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Dashboard: React.FC = () => (
  <StyledDashboard>
    <Header />
    <Routes>
      <Route path='/' element={<ControlPanel />} />
      <Route path='Meteo' element={<MeteoDetails />} />
      <Route path='Menu' element={<MenuList />} />
      <Route path='Video' element={<Video />} />
      <Route path='Boiler' element={<Boiler />} />
      <Route path='Septic' element={<Septic />} />
      <Route path='Water' element={<Water />} />
      <Route path='Settings' element={<Settings />} />
      <Route path='Connect' element={<Connect />} />
      <Route path='Sip' element={<Sip />} />
    </Routes>
  </StyledDashboard>
);

export default Dashboard;
