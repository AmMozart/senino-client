import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes} from 'react-router-dom';

import { ControlPanel } from './features/controlPanel/ControlPanel';
import MeteoDetails from './features/meteo/MeteoDetails';
import { Header } from './features/header/Header';
import Assets3D from './features/Assets3D/Assets3D';
import { World3D } from './3d/World3D';
import style from './App.module.css';
import MenuList from './features/menu/MenuList';
import Video from './features/video/Video';

function App(): JSX.Element {
  const [world3DReady, setWorld3DReady] = useState<boolean>(false);

  const canvas = React.useRef<HTMLCanvasElement | null>(null);
  const world3D = useRef<World3D | null>(null);

  useEffect(() => {
    function prepare3D() {
      if (canvas.current) {
        world3D.current = new World3D(canvas.current);

        world3D.current.init().then(() => {
          setWorld3DReady(true);
        });
      }
    }
    prepare3D();
  }, []);

  return (
    <>
      <div className={style.canvasWrapper}>
        <canvas ref={canvas} className={style.canvas}>You are browser do not support canvas tag</canvas>
      </div>
      {world3DReady && <Assets3D />}

      <Routes>
        <Route path='/' element={<ControlPanel />}/>
      </Routes>

      <div className={style.wrapper}>
        <Header />

        <Routes>
          <Route path="/" ></Route>
          <Route path='/Meteo' element={<MeteoDetails />}/>
          <Route path='/Menu' element={<MenuList />}/>
        </Routes>

        <Video />
      </div>
    </>
  );
}

export default App;
