import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Canvas3D from './features/canvas3D/Canvas3D';
import { ControlPanel } from './features/controlPanel/ControlPanel';
import MeteoDetails from './features/meteo/MeteoDetails';
import { Header } from './features/header/Header';
import style from './App.module.css';
import MenuList from './features/menu/MenuList';
import Video from './features/video/Video';
import Sleep from './features/sleep/Sleep';
import Boiler from './features/boiler/Boiler';
import Septic from './features/septic/Septic';

function App(): JSX.Element {

  return (
    <>
      <Canvas3D />

      <div className={style.wrapper}>
        <Header />
        <Routes>
          <Route path='/' element={<ControlPanel />}/>
          <Route path='Meteo' element={<MeteoDetails />}/>
          <Route path='Menu' element={<MenuList />}/>
          <Route path='Video' element={<Video />}/>
          <Route path='Boiler' element={<Boiler />}/>
          <Route path='Septic' element={<Septic />}/>
        </Routes>
      </div>
      
      <Sleep />
    </>
  );
}

export default App;
