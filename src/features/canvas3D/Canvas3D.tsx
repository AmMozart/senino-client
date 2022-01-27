import React, { useEffect, useRef, useState } from 'react';

import Assets3D from '../Assets3D/Assets3D';
import { World3D } from '../../3d/World3D';
import style from './Canvas3D.module.css';

const Canvas3D: React.FC = () => {
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
        <canvas ref={canvas} className={style.canvas}>
          You are browser do not support canvas tag!
        </canvas>
      </div>
    
      {world3DReady && <Assets3D />}
    </>
  );
};

export default Canvas3D;
