import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { ControlPanel } from '../controlPanel/ControlPanel';
import MeteoDetails from '../meteo/MeteoDetails';
import Settings from '../settings/Settings';
import Header from '../Header';
import MenuList from '../menu/MenuList';
import Boiler from '../Boiler';
import Septic from '../Septic';
import Video from '../video/Video';
import Water from '../Water';
import Connect from '../Connect';
import Sip from '../sip/Sip';

const StyledDashboard = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
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
